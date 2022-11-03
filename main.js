const express = require('express');
let questionList = require('./questions.json');

const app = express();

app.use(express.static('static'));

app.get('/questions', (request, response) => {
    let content ='';
    for (q of questionList)
    {
        content += '<div>';
        content += q.stem;
        content += '<br><br>';
        for (var i = 0; i < q.options.length; i++)
        {
            content += `<input type="radio" name="question${q}" value="a${i}" onclick="getAnswers()">${q.options[i]}<br>`
        }
        content += '<br><br>';
        content += '<input type="button" value="Submit" onclick="getScore"><br><br>';
        content += '</div>';
        content += '\n';
    }

    response.send(content);
})

app.get('/questionsInJson', (req,res) => {
    res.json(questionList);
})

app.listen(80);