var zekalje={
  parse:function(input) {
    //<p>태그
    input=input.replace(/(?=(?:\n\n)|^)([^#\n ]+)(?=(?:\n#+ [^ ]))||(?<=(?:#+ [^ ]+\n))([^#\n ]+)(?=(?:\n\n)|$)||(?<=(?:\n\n))([^\n ]+)(?=(?:\n\n))/g,'<p>$1</p>');
    //**굵은 글씨**
    input=input.replace(/\*\*([^\*\n]+)\*\*/g,'<b>$1</b>');
    //*기울어진 글씨*
    input=input.replace(/\*([^\*\n]+)\*/g,'<i>$1</i>');
    //***굵고 기울어진 글씨***
    input=input.replace(/\*\*\*([^\*\n]+)\*\*\*/g,'<b><i>$1</i></b>');
    //%하이라이트%
    input=input.replace(/\%([^\%\n]+)\%/g,'<mark>$1</mark>');
    //+윗줄+
    input=input.replace(/\+([^\+\n]+)\+/g,'<span style="text-decoration:overline;">$1</span>');
    //~취소선~
    input=input.replace(/~([^\~\n]+)~/g,'<span style="text-decoration:line-through;">$1</span>');
    //_밑줄_
    input=input.replace(/_([^\_\n]+)_/g,'<span style="text-decoration:underline;">$1</span>');
    //^윗첨자^
    input=input.replace(/\^([^\^\n]+)\^/g,'<sup>$1</sup>');
    //..밑첨자..
    input=input.replace(/\.\.([^\.\n]+)\.\./g,'<sub>$1</sub>');
    return input;
  }
};
