/* In this task, make a madlibs templates story
using JS string template literals. In the story
variable, write out the template of your madlibs
using string variables in the place of certain
nouns, adjectives, and verbs */

/* Variables, i.e.
const noun1 = ______
const verb1 = ______

Change thses values to generate a different story
*/

const adj1 = "funny"
const n1 = "story"
const n2 = "cats"
const n3 = "platypi"
const number = "two"
const n4 = "bird"

const story = `
A ${adj1} ${n1} was about to happen between the ${n2} and
the ${n3}. When the ${number} armies were collected together
the ${n4} hesitated about which to join. The ${n2} that
passed his perch said: “Come with us”; but he said: “I am
a ${n3}.” Later on, some ${n3} who were passing underneath him looked up and said: “Come with us”; but he
said: “I am a ${n2}.” Luckily at the last moment peace was
made, and no battle took place, so the ${n4} came to the
${n2} and wished to join in the rejoicings, but they all
turned against him, and he had to fly away. He then went
to the ${n3}, but soon had to retreat, or else they would
have torn him to pieces. “Ah,” said the ${n4}, “I see now.
'He that is neither one thing nor the other has no
friends.'”
`

console.log(story)
