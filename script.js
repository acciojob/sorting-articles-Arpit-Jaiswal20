const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

function removePrefix(name) {
  if (
    name.startsWith("A ") ||
    name.startsWith("An ") ||
    name.startsWith("The ")
  ) {
    return name.split(" ").splice(1).join(" ");
  }
  return name;
}
const sortedBands = bands.sort((a, b) => {
    return removePrefix(a).toLowerCase().localeCompare(removePrefix(b).toLowerCase());
});


console.log(sortedBands);

const bandList = document.getElementById('bands');

for(let i=0;i<sortedBands.length;i++)
{
    const li =  document.createElement('li');
    li.textContent = sortedBands[i];
    bandList.appendChild(li);
}

