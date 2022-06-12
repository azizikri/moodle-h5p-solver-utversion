let json = H5PIntegration.contents;

let interactions = JSON.parse(json[Object.keys(json)[0]].jsonContent).questions;
console.log(interactions);
let html = "";
html += `<h1>Answers</h1>`

for (let i = 0; i < interactions.length; i++) {
    interaction = interactions[i]
    params=interaction.params

    html += `<h2>Question ${i + 1}</h2>`

        answers = params.answers
        for (let i = 0; i < answers.length; i++) {
            answer = answers[i]
            if (answer.correct==true)
                html += `<p>${answer.text}</p>`
                console.log(answer.text)
        }
    console.log("\n")
}

const win = window.open('', 'answers', 'width=400, height=600');
win.document.write(html);
