const body = document.querySelector('.container');
let trainList = [
    'MAN675847583748sjt567654;Manchester Piccadilly',
    'GNF576746573fhdg4737dh4;Greenfield',
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    'SYB4f65hf75f736463;Stalybridge',
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
];

for (i = 0; i < trainList.length; i++) {
    let stationCode = trainList[i].slice(0, 3); //2nd parameter is 3 because it doesn't include last memory cell in array. 
    let semiColon = trainList[i].indexOf(';') + 1; //+1 here to offset semi-colon and not include in log
    let stationName = trainList[i].slice(semiColon, trainList[i].length);
    let result = `${stationCode} - ${stationName}`;
    console.log(result);
}