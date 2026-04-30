function generateStory(event) {
    event.preventDefault();

    let Person = document.getElementById('Person').value;
    let place = document.getElementById('place').value;
    let animal = document.getElementById('animal').value;
    let object = document.getElementById('object').value;

    let story = `One day, ${Person} went to the ${place}. Nothing unusual happened.
${Person} walked around the ${place} and saw a ${animal}, but it was just sitting there.

The ${animal} looked at ${Person} for a moment, then looked away.
There was a ${object} on the ground, but ${Person} didn’t bother picking it up.

After a while, ${Person} got bored and left the ${place}.
It was just a normal day, and nothing interesting really happened.`;

    document.getElementById('story').innerText = story;
    document.getElementById('nextBtn').style.display = 'inline';
}

function nextDay() {
    document.getElementById('story').innerText = "The next day was exactly the same. Nothing interesting happened.";
    document.getElementById('nextBtn').style.display = 'none';
}


let form = document.getElementById('storyForm');
let nextBtn = document.getElementById('nextBtn');

form.addEventListener('submit', generateStory);
nextBtn.addEventListener('click', nextDay);

// just copied the style.css
