//Dataset for graph: data strings with arbitrary values attached
var dataset = [  
                ['2015-02-01' , 7 ],
                ['2015-03-01' , 9 ], 
                ['2015-04-01' , 10], 
                ['2015-05-01' , 3 ], 
                ['2015-06-01' , 5 ],
                ['2015-07-01' , 15],
              ];

//Height and width constants
var h = 450;
var w = 750;

// Set the ranges with native d3 function expressions
var x = d3.time.scale().range([0, w]);
var y = d3.scale.linear().range([h, 0]);


//This is a native d3 time formatting function expression 
//See how it is used in the valueline function on line 64
//You may read about here: https://github.com/d3/d3-3.x-api-reference/blob/master/API-Reference.md#d3time-timeatting
var parseDate = d3.time.format("%Y-%m-%d").parse;

// Scale the range of the data
x.domain(d3.extent(dataset, /*CALLBACK METHOD*/));
y.domain([0, d3.max(dataset, /*CALLBACK METHOD*/);

// Define the axes
var xAxis = d3.svg.axis().scale(x)
    .orient("bottom").ticks(7);

var yAxis = d3.svg.axis().scale(y)
    .orient("left").ticks(10);

//Append SVG to DOM
var svg = d3.select(".container")
              .append("svg")
              .attr("width", w + 100)
              .attr("height", h + 100)
              .append("g")
              .attr("transform", "translate(50, 50)");


// Add the Y Axis
svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);

/*
  Add the X Axis code here
*/

// Define the line
var valueline = d3.svg.line().interpolate("monotone")
    .y(function(d) { 
      return y(d[1]); 
    })
    .x(function(d) { 
      return x(parseDate(d[0])); 
    })

// Add the valueline path
//This will tell you if your dots are off
svg.append("path")
    .attr("class", "line")
    .attr("d", valueline(dataset));

//Use a d3 JOIN here to link data with the graph
svg.selectAll("dot")
    /*  
        Your JOIN chain here
    */
    
    //Add some interactivity! 
    //Uncomment the block below and complete the tooltip code!
    var tooltip = d3.select("body").append("div") 
                    .attr("class", "tooltip")       
                    .style("opacity", 0);
                    
    tooltip.on("mouseover", /* Show Tooltip */)          
    .on("mouseout", /* Hide Tooltip */);


