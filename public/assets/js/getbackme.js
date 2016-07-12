function updateContent (selector, data) {
    var m = parseInt(data.money_pledged)
    $("#" + selector + " .title").text(data.title);
    $("#" + selector + " .pledged b").animateNumbers(m, true, 5000);
    $("#" + selector + " .backer-count b").animateNumbers(data.backer_count, true, 3000);
}
function getDopplerData() {
    $.getJSON("https://mrbartender.backme.tw/api/projects/247.json?token=0fa5951348a6a93608fbe4daafb86d3b",function(data){
      updateContent("mrbartender", data);
    })
    $.getJSON("https://happystation.backme.tw/api/projects/264.json?token=aad79e40ff0a7820f28358794e47d5b9",function(data){
      updateContent("jimmy", data);
    })
    $.getJSON("https://jarvish.backme.tw/api/projects/294.json?token=7039dd9382b56c6cb810140b5fd79e6c",function(data){
      updateContent("jarvish", data);
    })
    $.getJSON("https://xltt.backme.tw/api/projects/279.json?token=70b7205cf8c6e0faed4d24c32c0215a9",function(data){
      updateContent("xltt", data);
    });
    var a = parseInt($("#mrbartender .pledged b").text().replace(/,/g,""), 10)
    var b = parseInt($("#jimmy .pledged b").text().replace(/,/g,""), 10)
    var c = parseInt($("#jarvish .pledged b").text().replace(/,/g,""), 10)
    var d = parseInt($("#xltt .pledged b").text().replace(/,/g,""), 10)
    var all = a + b + c + d
    $("h3 b").delay(1000).animateNumbers(all, true, 2500);
    _jf.flush();
    setTimeout('getDopplerData()',4500);
  }