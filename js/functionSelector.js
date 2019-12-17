
class ModuleFunctionSelector {
  constructor(DrawFunctionModules, renderCallback) {
    this.DrawFunctionModules = DrawFunctionModules;
    this.render = renderCallback;
  }

  createMenu() {
    let store = sessionStorage;
    store.filename
      || (store.filename = (Object.keys(this.DrawFunctionModules)[0]));
    store.functionname
      || (store.functionname = store['lastNameOf' + store.filename])
      || (store.functionname = store['lastNameOf' + store.filename] = (Object.keys(this.DrawFunctionModules[store.filename])[0]));

    //File dropdown
    d3.select("#menu").append("select")
      .attr("id", "fileSelect")
      .on("change", e => {
        sessionStorage.filename = d3.select("#fileSelect").node().value;
        (store.functionname = store['lastNameOf' + store.filename])
          || (store.functionname = store['lastNameOf' + store.filename] = (Object.keys(this.DrawFunctionModules[store.filename])[0]));
        this.render();
      })
      .selectAll("option")
      .data(Object.keys(this.DrawFunctionModules)).enter().append("option")
      .attr("value", d => d)
      .text(d => d)
      .attr("selected", d => d === sessionStorage.filename ? "true" : null);

    //function dropdown
    d3.select("#menu").append("select")
      .attr("id", "functionSelect")
      .on("change", e => {
        sessionStorage.functionname = d3.select("#functionSelect").node().value;
        sessionStorage['lastNameOf' + sessionStorage.filename] = sessionStorage.functionname;
        this.render();
      })
      .selectAll("option")
      .data(Object.keys(this.DrawFunctionModules[sessionStorage.filename])).enter().append("option")
      .attr("value", d => d)
      .text(d => d)
      .attr("selected", d => d === sessionStorage.functionname ? "true" : null);
  }
  callFunction() {
    this.DrawFunctionModules[sessionStorage.filename][sessionStorage.functionname](this.render);
  }
}

export { ModuleFunctionSelector };