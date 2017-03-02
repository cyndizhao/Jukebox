function parseNote(string){
  let nodeobject = {};
  if (string.indexOf("*") != -1){
    let array = string.split("\*");
    nodeobject["pitch"] = array[0];
    nodeobject["beats"] = parseFloat(array[1]);
  }else{
    nodeobject["pitch"] = string;
    nodeobject["beats"] = 1;
  }
  return nodeobject;
}

function parseSong(songString){
  let list = songString.split(" ");
  let result = [];
  for (let song of list){
    result.push(parseNote(song));
  }
  return result;
}
