var questions = [
    {
        question:"Q: Which of the following is correct about JavaScript?",
        option1:" JavaScript is Assembly-language",
        option2:" JavaScript is an Object-Based language",
        option3:" JavaScript is a High-level language",
        correctAns:" JavaScript is an Object-Based language"
    },
    {
        question:"Q: HTML uses ______?",
        option1:"Tags for links only",
        option2:"User-defined tags",
        option3:"Fixed tags defined by the language",
        correctAns:"Fixed tags defined by the language"
    },{
        question:"Q: In css, what h1 can be called as ______",
        option1:"Selector",
        option2:"Value",
        option3:"Label",
        correctAns:"Selector"
    },{
        question:"Q: Who is the main author of the HTML?",
        option1:" Brendan Eich",
        option2:"Web developer",
        option3:"Tim Berners-Lee",
        correctAns:"Tim Berners-Lee"
    },{
        question:"Q: Which of the attributes is mandatory in the <img> tag?",
        option1:"src",
        option2:"href",
        option3:"id",
        correctAns:"src"
    }
    ,{
        question:"Q: Which of the following properties defines the spacing between letters?",
        option1:"space",
        option2:"line-height",
        option3:"letter-spacing",
        correctAns:"letter-spacing"
    }
    ,{
            question:"Q: Which of the following CSS selectors are used to specify a group of elements?",
            option1:"id",
            option2:"tag",
            option3:"class",
            correctAns:"class"
    }]
    
    var para = document.getElementById("ques");
    var opt1 = document.getElementById("opt1");
    var opt2 = document.getElementById("opt2");
    var opt3 = document.getElementById("opt3");
    var button = document.getElementById("btn");
    var button2 = document.getElementById("reset");
    var timer = document.getElementById("timer");
    var index = 0;
    var score = 0;
    var min = 1;
    var sec = 59;
    
    
    
    setInterval(function(){
        timer.innerHTML = `${min}:${sec}`;
        sec--
        if(sec<0){
            min--;
            sec = 59    
        }
        if(min<0){
            min= 1;
            sec = 59;
            nextQuestion()
        }
    },100)
    
    var timeleft = 1800;
    function rig() {
    var Timer = setInterval(function 
       function1(){ 
    document.getElementById("countdown").innerHTML = Math.floor(timeleft / 60) + ":" + (timeleft % 60 ? timeleft % 60 : '00') + "&nbsp"+"minutes remaining";
    timeleft -= 1;
    if(timeleft <= 0){
    clearInterval(Timer);
    document.getElementById("countdown").innerHTML = "Time out"
      }
    }, 1000);
        console.log(countdown)
    }
    
    function nextQuestion()  {

        min = 1;
        sec = 59;
    
        var getOptions = document.getElementsByName("options");
    
        for(var i = 0;i<getOptions.length;i++)
        {
            if(getOptions[i].checked){
                var selectedValue = getOptions[i].value;
                // console.log(selectedValue)
                var selectedQues = questions[index - 1]["question"];
                var selectedAns = questions[index-1][`option${selectedValue}`]
                var correctAns = questions[index - 1]["correctAns"]
                if(selectedAns == correctAns){
                    score++
                }
            }
            getOptions[i].checked = false
        }
    
        button.disabled = true
    
        if(index >questions.length - 1){
    
            Swal.fire(
                'Good job!',
            `Your percentage is ${((score / questions.length)*100).toFixed(2)}`,
                'success'
              )
        }
        else{
    
            
            para.innerHTML = questions[index].question;
            opt1.innerText = questions[index].option1;
            opt2.innerText = questions[index].option2;
            opt3.innerText = questions[index].option3;
            index++
        }
    }
    

    var option1 = document.querySelector('opt1'),
        option2 = document.querySelector('opt2');
        option3 = document.querySelector('opt3');

    

    function clicked()
    {
        button.disabled = false
    }

    function btn(){
     button.timer = 500;
    }   
    function reset(){
        
        
    }
    
function StartQuiz(){
    nextQuestion()
}

function resetQuiz() {
    index = 0;
    score = 0;
    min = 1;
    sec = 59;

    for (var i = 0; i < questions.length; i++) {
        var getOptions = document.getElementsByName("options");
        for (var j = 0; j < getOptions.length; j++) {
            getOptions[j].checked = false;
        }
    }

    para.innerHTML = '';
    opt1.innerText = '';
    opt2.innerText = '';
    opt3.innerText = '';
    timer.innerHTML = '1:00';

    button.disabled = false;
    
    StartQuiz(); 
}


