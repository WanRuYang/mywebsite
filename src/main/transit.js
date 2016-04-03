export function line_chart(){
  //Width and height
  var circleData = 
  //about 20, 28; research 60, 89; portfolio 434, 91
      [ { "x": 60,  "y": 58, "color":"#137bba", "tab":"#about"},
        { "x": 100,  "y": 119, "color":"#ffffff","tab":"#research"},
        { "x": 514, "y": 119, "color":"#55AE3A", "tab":"#portfolio"}
        ];

  var resumeNode = { "tab":"wryang/static/main/resume_yang_jan2016.pdf", 
                        "nodes": [{ "x": 660, "y": 63, "r":10, "color":"#ffffff"}, 
                                  { "x": 660, "y": 63, "r":6, "color":"black"}]}

  var geoLineData = [ { "x": 60, "y": 58}, { "x": 660, "y": 58}];

  var ecoLineData = [ { "x": 190, "y": 112},  
                      { "x": 190, "y": 68},
                      { "x": 660, "y": 68}]
  var rectData = [ {"x": 185, "y":52, "tab":"#rs"}, {"x": 187, "y":54, "tab":"#rs"},
                {"x": 270, "y":53, "tab":"#GIS"}, {"x": 380, "y":53, "tab":"#analysis"},  
                {"x": 509, "y":52, "tab":"#skill"}, {"x": 511, "y":54, "tab":"#skill"}]
  var stoplabel = [
            {"x":40, "y":42, "name":"About"},
            {"x":140, "y":42, "name":"Remote Sensing"},
            {"x":265, "y":42, "name":"GIS"},
            {"x":345, "y":42, "name":"Data Analysis"},
            {"x":465, "y":42, "name":"Computational Skills"},
            {"x":634, "y":42, "name":"Resume"},
            {"x":526, "y":125, "name":"Portfolio"},
            {"x":60, "y":108, "name":"Research"},
            {"x":455, "y":11, "name":"Geography"},
            {"x":580, "y":11, "name":"Ecology"} ]

// Create Event Handlers for mouse
  function handleMouseOver(d, i) {  
        d3.select(this).attr({
          r: radius * 1.2});}

  function handleMouseOut(d, i) {
        d3.select(this).attr({
          r: radius*0.8});}

  function handleGMouseOver(d, i) {  
        d3.select(this).selectAll("circle").attr("r", function(nd) { return nd.r * 1.2; });
      }

  function handleGMouseOut(d, i) {  
        d3.select(this).selectAll("circle").attr("r", function(nd) { return nd.r; });
      }

  var w = 800;
  var h = 300;

  var svgContainer = d3.select("#transitMap")
            .append("svg")
            .attr("width", w)   
            .attr("height", h); 

  // a group to hold the lines
  var geoGroup = svgContainer.append("g");

  var lineFunction = d3.svg.line()
                          .x(function(d) { return d.x; })
                          .y(function(d) { return d.y; })
                          .interpolate("linear");
  
  var geoLineGraph = geoGroup.append("path")
                          .attr("d", lineFunction(geoLineData))
                          .attr("stroke", "#137bba")
                          .attr("stroke-width", 9)
                          .attr("fill", "none");
  
  var partial = svgContainer.append("g");
    partial.append("line")
             .attr("x1", 100)
             .attr("y1", 119)
             .attr("x2", 178)
             .attr("y2", 119)
             .attr("stroke-width", 9)
             .attr("stroke", "#ffae19");
    
    partial.append("line")
             .attr("x1", 390)
             .attr("y1", 8)
             .attr("x2", 450)
             .attr("y2", 8)
             .attr("stroke-width", 7)
             .attr("stroke", "#137bba");  


    partial.append("line")
             .attr("x1", 520)
             .attr("y1", 8)
             .attr("x2", 570)
             .attr("y2", 8)
             .attr("stroke-width", 7)
             .attr("stroke", "#ffae19");


    partial.append("line")
             .attr("x1", 514)
             .attr("y1", 60)
             .attr("x2", 514)
             .attr("y2", 120)
             .attr("stroke-width", 9)
             .attr("stroke", "#55AE3A");

  // a group to hold the lines
  var ecoGroup = svgContainer.append("g");
  var ecoLineGraph = ecoGroup.append("path")
                          .attr("d", lineFunction(ecoLineData))
                          .attr("stroke", "#ffae19")
                          .attr("stroke-width", 9)
                          .attr("fill", "none");

  // radial curve
  var radius = 10,
      padding = 10,
      radians = Math.PI / 2;

  var dimension = (2 * radius) + (2 * padding),
      points = 15;

  var angle = d3.scale.linear()
      .domain([3, points-1])
      .range([3, radians]);

  var line = d3.svg.line.radial()
      //.interpolate("basis")
      .interpolate("linear")
      .tension(0)
      .radius(radius)
      .angle(function(d, i) { return angle(i); });

  var radialcurve = svgContainer.append("g");

  radialcurve.append("path").datum(d3.range(points))
      .attr("class", "line")
      .attr("d", line)
      .attr("stroke-width", 9)
      .attr("stroke", "#ffae19") 
      .attr("fill", "none")
      .attr("transform", "translate(180,109)");


  // add stops -- single line 
  var circleGroup = svgContainer.append("g");
  var circles = circleGroup.selectAll("circle")
      .data(circleData)
      .enter()
      .append("a")
      // .attr("xmlns:xlink", "http://www.w3.org/1999/xlink")
      .attr("xlink:href", function(d) { return d.tab; })
      .append("circle")
      
    circles.attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; })
            .attr("r", 7)
            .attr("stroke-width", 1.5)
            .attr("stroke", function(d, i) {
                var returnColor;
                if (i==1) { returnColor = "#808080";
                    } else {returnColor = d.color;
                    }
                 return returnColor;})
            .attr("fill", function(d, i) { 
                  return d.color;})
            .on("mouseover", handleMouseOver)
            .on("mouseout", handleMouseOut);

    var resumeGroup = svgContainer.append("g")
                        .datum(resumeNode)
                      .append("a")
                        .attr("xlink:href", function(d) { return d.tab; })
                        .on("mouseover", handleGMouseOver)
                        .on("mouseout", handleGMouseOut);
    var resumeNodeGraph = resumeGroup.selectAll("circle")
                              .data(function(d) { return d.nodes; })
                              .enter()
                              .append("circle")
                              .attr("cx", function(d) { return d.x; })
                              .attr("cy", function(d) { return d.y; })
                              .attr("r", function(d) { return d.r; })
                              .attr("stroke-width", 1.5)
                              .attr("stroke", "#808080")
                              .attr("fill", function(d){return d.color})


  // add shared stops
  var shareStop = svgContainer.append("g");
      shareStop.selectAll("rect")
                .data(rectData)
                .enter()
                .append("a")
                .attr("xlink:href", function(d) { return d.tab;})   
                .append("rect") 
                .attr("x", function(d) { return d.x; })  
                .attr("y",  function(d) { return d.y+2; })    
                .attr("height", function(d,i) {
                  var h;
                  if ( i== 0 || i == 4) {
                    h = 20;
                  } else {
                    h = 16;
                  }   
                    return h;})
                .attr("width", function(d,i) {
                  var w;
                  if ( i== 0 || i == 4) {
                    w = 10;
                  } else if (i== 1 || i == 5) {
                    w = 6;
                  } else { 
                     w = 9; 
                  }  
                    return w;})  
                .attr("rx", 3)     
                .attr("ry", 3)
                .attr("stroke-width", 1.2)
                .attr("stroke", "#808080") 
                .attr("fill", function(d, i){
                  var f;
                  if (i== 1 || i == 5) {
                    f = "black";
                  } else { 
                     f = "white"; 
                  }  
                    return f;})
                .on("mouseover", function(){d3.select(this).style("fill", "#F75FAE");})
                .on("mouseout", function(){d3.select(this).style("fill", function(d, i){
                  var f;
                  if (i== 1 || i == 5) {
                    f = "black";
                  } else { 
                     f = "white";}
                   })});

  // add text label 
  var stopLabelGroup = svgContainer.append("g");

      let stopLabels = stopLabelGroup.selectAll("text")
                    .data(stoplabel)
                    .enter()
                    .append("text")
                    .text(function(d){return d.name;})
                      .attr("x", function(d) { return d.x; })
                      .attr("y", function(d) { return d.y; })
                      .attr("font-family", "sans-serif")
                      .attr("font-size", "12px")
                      .attr("fill", "#808080");
}