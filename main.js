import { ModuleFunctionSelector } from "./js/functionSelector.js";
import * as diagrams from "./diagrams.js";
//import * as diagrams_solution from "./diagrams_solution.js";
//import * as multivariate from "./multivariate.js";
//import * as hierarchy from "./hierarchy.js"
//import * as networks from "./networks.js"
//import * as streamgraph from "./streamgraph.js";
//import * as exam from "./exam.js"
//TODO:: insert other files for future assignments here ...

let functionSelector = new ModuleFunctionSelector({
  //javascript,
  diagrams,
  //diagrams_solution,
  //multivariate,
  //hierarchy,
  //networks,
  //streamgraph,
  //exam,
  //TODO:: ... and here
}, render);

function createMenu() {
  functionSelector.createMenu();



  /////  ---- Download Button
  d3.select("#menu")
    .append("button")
    .text("Download")
    .attr("title", "Download the content-svg seen below")
    .on("click", e => {
      const name = "content.svg";
      let svg_text = d3.select("svg")
        .attr("title", name)
        .attr("version", 1.1)
        .attr("xmlns", "http://www.w3.org/2000/svg")
        .node().parentNode.innerHTML;

      let a = d3.select("body")
        .append("a")
        .attr("href", "data:text/plain;charset=utf-8," + encodeURIComponent(svg_text))
       .attr("download", name);
      a.node().click();
      a.remove();
    });

}

render();
function render() {
  //clear menu and drawing area
  d3.select("#content").selectAll("*").remove();
  d3.select("#menu").selectAll("*").remove();
  createMenu();

  //this calls the function selected in the drop-down menu of the environment.
  functionSelector.callFunction();
}

