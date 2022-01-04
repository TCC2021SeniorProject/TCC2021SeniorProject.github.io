//Used jquery

const STRAIGHT_ANGLE = 640;
const CIRCLE_ROTATION_SPEED = 20;
const FASTER_CIRCLE_ROTATION_SPEED = 80;
const DEGREE_SHIFT = 1.5;
const LINE_PADDING_VALUE = 7;
const BACKWARD_MULTIPLIER = 19;

function isZooming() {
    var newPx_ratio = window.devicePixelRatio
     || window.screen.availWidth
      / document.documentElement.clientWidth;
    if (newPx_ratio != px_ratio) {
       px_ratio = newPx_ratio;
       return true;
    } else {
       return false;
    }
 }

 function rotate_single(circle, faster) {
    var counter = 0;
    var interval_obj = setInterval(function() {
        if (counter >= STRAIGHT_ANGLE) {
            counter = 0;
        }
        $(circle).css({
            'transform': 'rotate('
              + counter * DEGREE_SHIFT + 'deg)'
        });
        counter++;
    }, (faster) ? FASTER_CIRCLE_ROTATION_SPEED
         : CIRCLE_ROTATION_SPEED );
    return interval_obj;
}


function rotate(outer_circles, faster) {
    var counter = 0;
    var interval_obj = setInterval(function() {
        if (counter >= STRAIGHT_ANGLE) {
            counter = 0;
        }
        $(outer_circles).css({
            'transform': 'rotate('
              + counter * DEGREE_SHIFT + 'deg)'
        });
        counter++;
    }, (faster) ? FASTER_CIRCLE_ROTATION_SPEED
         : CIRCLE_ROTATION_SPEED );
    return interval_obj;
}

//returns center points
function getOffset(element) {
    var position = $(element).position();
    var xSize = $(element).width();
    var ySize = $(element).height();
    return {
        x: position.left + xSize / 2,
        y: position.top + ySize / 2
    };
}

function getTheta(x1, y1, x2, y2) {
    var value = -(y2 - y1) / (x2 - x1);
    if ((x2 - x1) == 0) {
        return Math.atan(-180);
    } else if ((y2 - y1) == 0) {
        return Math.atan(0);
    }
    return Math.atan(-(y2 - y1) / (x2 - x1));
}

function getWidth(r, theta) {
    return Math.cos(theta) * r;
}

function getHeight(r, theta) {
    return Math.sin(theta) * r;
}

//starts at the contour of the circle
function getStartPos(x1, y1, r, theta) {
    return {
        left: x1 + getWidth(r, theta),
        top: y1 - getHeight(r, theta)
    }
}

function getStartPosOpposite(x1, y1, r, theta) {
    return {
        left: x1 - getWidth(r, theta),
        top: y1 + getHeight(r, theta)
    }
}

//ends at the contour of the circle
function getEndPos(x2, y2, r, theta) {
    return {
        left: x2 - getWidth(r, theta),
        top: y2 + getHeight(r, theta)
    }
}

function getEndPosOpposite(x2, y2, r, theta) {
    return {
        left: x2 + getWidth(r, theta),
        top: y2 - getHeight(r, theta)
    }
}

function getRadiusOfCircle(circle) {
    return ($(circle).width() / 2) + LINE_PADDING_VALUE;
}

//Get coordinations of the points
function getCoordinations(startCir, endCir) {
    var startCenter = getOffset(startCir);
    var endCenter = getOffset(endCir);

    var theta = getTheta(startCenter.x, startCenter.y,
        endCenter.x, endCenter.y);
    var r = getRadiusOfCircle(startCir);

    //right-ward direction
    if (startCenter.x <= endCenter.x) {
        var startPos = getStartPos(startCenter.x, startCenter.y, r, theta);
        var endPos = getEndPos(endCenter.x, endCenter.y, r, theta);
    } else { //left-ward direction
        var startPos = getStartPosOpposite(startCenter.x, startCenter.y, r, theta);
        var endPos = getEndPosOpposite(endCenter.x, endCenter.y, r, theta);
    }
    return {
        startPos,
        endPos
    }
}



function getMidPoint(startPos, endPos, transition_text) {
    var width = $(transition_text).width();
    var height = $(transition_text).height();
    var midPointX = startPos.left + ((endPos.left - startPos.left) / 2) - width / 2;
    var midPointY = startPos.top + ((endPos.top - startPos.top) / 2) - height / 1.8;
    return {
        midPointX,
        midPointY,
    }
}

function setTransTextPos (coordinations, transition_texts) {
    var midPoints = []
    var tilt_list = []
    for (let index = 0; index < coordinations.length; index++) {
        var startP = coordinations[index].startPos;
        var endP = coordinations[index].endPos;
        midPoints.push(getMidPoint(startP, endP, transition_texts[index]));
        if (startP != null && endP != null) {
            console.log(startP.left);
            tilt_list.push(getTheta(startP.left, startP.top, endP.left, endP.top));
        }
    }

    for (let index = 0; index < coordinations.length; index++) {
        $(transition_texts[index]).css("left", midPoints[index].midPointX);
        $(transition_texts[index]).css("top", midPoints[index].midPointY);
        $(transition_texts[index]).css('transform', 'rotate(' + -tilt_list[index] + 'rad)');
    }
}

//Origin point of y starts from the top not the bottom
function drawLine(startPos, endPos, line) {

    var start_x = startPos.left;
    var start_y = startPos.top;
    var end_x = endPos.left;
    var end_y = endPos.top;

    $(line).attr("x1", start_x);
    $(line).attr("y1", start_y);
    $(line).attr("x2", end_x);
    $(line).attr("y2", end_y);
}

function initialize_and_draw_line(circles, lines) {
    var coordination = []
    //Draw lines between each node
    let i = 0;
    for (i = 0;i < circles.length - 1; i++) {
        var coord = getCoordinations(circles[i], circles[i + 1]);
        drawLine(coord.startPos, coord.endPos, lines[i]);
        coordination.push(coord);
    }
    //line 7: index 6
    var coord = getCoordinations(circles[2], circles[0]);
    drawLine(coord.startPos, coord.endPos, lines[++i]);
    coordination.push(coord);
    //line 8: index 7
    coord = getCoordinations(circles[4], circles[2]);
    drawLine(coord.startPos, coord.endPos, lines[++i]);
    coordination.push(coord);
    //line 9: index 8
    coord = getCoordinations(circles[3], circles[2]);
    drawLine(coord.startPos, coord.endPos, lines[++i]);
    coordination.push(coord);
    return coordination;
}

function change_circle_color_on_hover() {
    var rotate_obj;
    $('#text_box_1').hover(function() {
        $('#circle_1 .inner_circle').css('background-color', 'rgb(116, 57, 57)');
        $('#text_box_1').css('color', 'rgba(219, 107, 107, 0.918)');
        //rotate_obj = rotate_single($('#outer_circle_1'), true);
      }, function() {
        // on mouseout, reset the background colour
        $('#circle_1 .inner_circle').css('background-color', 'rgb(163, 85, 85)');
        $('#text_box_1').css('color', 'white');
        //clearInterval(rotate_obj);
    });

    $('#text_box_2').hover(function() {
        $('#circle_2').css('background-color', 'rgb(44, 81, 141)');
        $('#text_box_2').css('color', 'rgba(219, 107, 107, 0.918)');
        //rotate_obj = rotate_single($('#outer_circle_2'), true);
      }, function() {
        // on mouseout, reset the background colour
        $('#circle_2').css('background-color', 'rgb(79, 116, 177)');
        $('#text_box_2').css('color', 'white');
        //clearInterval(rotate_obj);
    });

    $('#text_box_3').hover(function() {
        $('#circle_3').css('background-color', 'rgb(44, 81, 141)');
        $('#text_box_3').css('color', 'rgba(219, 107, 107, 0.918)');
        //rotate_obj = rotate_single($('#outer_circle_3'), true);
      }, function() {
        // on mouseout, reset the background colour
        $('#circle_3').css('background-color', 'rgb(79, 116, 177)');
        $('#text_box_3').css('color', 'white');
        //clearInterval(rotate_obj);
    });

    $('#text_box_4').hover(function() {
        $('#circle_4').css('background-color', 'rgb(44, 81, 141)');
        $('#text_box_4').css('color', 'rgba(219, 107, 107, 0.918)');
        // rotate_obj = rotate_single($('#outer_circle_4'), true);
      }, function() {
        // on mouseout, reset the background colour
        $('#circle_4').css('background-color', 'rgb(79, 116, 177)');
        $('#text_box_4').css('color', 'white');
        // clearInterval(rotate_obj);
    });

    $('#text_box_5').hover(function() {
        $('#circle_5').css('background-color', 'rgb(44, 81, 141)');
        $('#text_box_5').css('color', 'rgba(219, 107, 107, 0.918)');
        //rotate_obj = rotate_single($('#outer_circle_5'), true);
      }, function() {
        // on mouseout, reset the background colour
        $('#circle_5').css('background-color', 'rgb(79, 116, 177)');
        $('#text_box_5').css('color', 'white');
        //clearInterval(rotate_obj);
    });

    $('#text_box_6').hover(function() {
        $('#circle_6').css('background-color', 'rgb(44, 81, 141)');
        $('#text_box_6').css('color', 'rgba(219, 107, 107, 0.918)');
        //rotate_obj = rotate_single($('#outer_circle_6'), true);
      }, function() {
        // on mouseout, reset the background colour
        $('#circle_6').css('background-color', 'rgb(79, 116, 177)');
        $('#text_box_6').css('color', 'white');
        //clearInterval(rotate_obj);
    });

    $('#text_box_7').hover(function() {
        $('#circle_7 .inner_circle').css('background-color', 'rgb(116, 57, 57)');
        $('#text_box_7').css('color', 'rgba(219, 107, 107, 0.918)');
        //rotate_obj = rotate_single($('#outer_circle_7'), true);
      }, function() {
        // on mouseout, reset the background colour
        $('#circle_7 .inner_circle').css('background-color', 'rgb(163, 85, 85)');
        $('#text_box_7').css('color', 'white');
        //clearInterval(rotate_obj);
    });
}


$(function() {
    var outer_circles = $('.outer_circle');
    var lines = $('.line');

    //setup gradual points
    var coordinations = initialize_and_draw_line(outer_circles, lines);

    var rotate_obj = rotate(outer_circles, false);
    //clearInterval(rotate_obj);

    change_circle_color_on_hover();

    var transition_texts = $('.transition_text');
    setTransTextPos(coordinations, transition_texts);

});
