export{scatterPlot};
function scatterPlot() {
  const W = 1280;  // downscale W and H if needed
  const H = 720;
  const margin = { left: 100, top: 10, right: 10, bottom: 100 };
  const innerHeight = H - margin.top - margin.bottom;
  const innerWidth = W - margin.right - margin.left;

  d3.csv("./data/scatterplot_data.csv").then(data => {

    const xValue = d => d["y"];  // no error: mismatch of dimensions
    const yValue = d => d["x"];  // between numpy and d3
    const colorValueR = d => d["r"];  //R values ready to use without colorscale
    const colorValueG = d => d["g"];  //G values ready to use without colorscale
    const colorValueB = d => d["b"];  //B values ready to use without colorscale


    let svg = d3.select("#content")
     .append("svg")
     .attr("width", W)
     .attr("height", H);

    svg.append("rect")
     .attr("width", W)
     .attr("height", H)
     .attr("fill", "white")
 
    // because it was so much fun the last time i created a wonderful dataset for your custom scatterplot.
    // but of course you have to do some things first. i am sure you can do this.
    //
    // TODO Area starts here:
    //
    // 1. set ranges and scale for x and y axis
    // Hint: the x and y data is discrete this time, you may want to use d3.scalePoint for both
    // Warning: the data is already sorted! You should not sort it twice..
    
    

    // 2. append the graph g to svg to set ground for the axis and circles:


    // 3. draw the axis:
   

    // 4. draw the circles:
    // Hint1: nothing to difficult for the datapoints, use the scales you created for x and y
    // Hint2: for the colors use d3.rgb instead of the colorscale you needed the last time. 
    // d3.rgb(r,g,b) takes the RGB values retrieved directly from the csv file (colorValue_)
    // Hint3: set radius of circles to 2
  
  });    

    // 5. If you finished the task:
    // 1. maybe the plot is too big for the screen -> go back an downscale W and H to your screen size
    // 2. you may want to uncomment the axis if they bother you (stuff that looks like this: var xAxis, g.append('g').call(axis))
    // 3. i hope you could refresh your knowledge
    // 4. pay me back for the fun in bed ;)
}

