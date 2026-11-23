const courses = [
  { tag: "Course 1 · Caltech · EE114", title: "Analog Circuit Design, Prof. Ali Hajimiri", body: "Caltech puts its Analog Circuit Design course on YouTube for free, in the playlist 'New Analog Circuit Design', 91 videos. It covers the fundamentals behind how analog circuits are designed, from the transistor up to complete amplifier building blocks. You learn how to analyse circuits by intuition rather than brute force, how feedback shapes gain and stability, and why real world effects like noise decide whether a design actually works." },
  { tag: "Course 2 · Cornell · ECE 4070", title: "Physics of Semiconductors and Nanostructures, Prof. Debdeep Jena", body: "Cornell shares its Physics of Semiconductors and Nanostructures course as free lecture videos, 26 of them. It covers the physics inside the materials that every chip is built from, including band structure, carrier transport, and nanoscale devices. You learn why electrons in crystals behave the way they do, how that behaviour sets the limits of transistors, and what changes when devices shrink to the nanometre scale." },
  { tag: "Course 3 · ETH Zürich · Spring 2020", title: "Digital Design and Computer Architecture, Prof. Onur Mutlu", body: "ETH Zürich offers its full Digital Design and Computer Architecture course online for free, 38 videos, under the banner 'How Computers Work (from the ground up)'. It covers digital design from the transistor as a switch up to complete microprocessors, including logic, memory, and pipelining. You learn how to describe hardware in Verilog, how processors execute instructions, and how to build a working CPU on an FPGA in the labs." },
];

const lectures = [
  { tag: "Caltech · Lecture 101N", title: "Basic Solid-State Physics: Energy bands, Electrons and Holes", body: "59 minutes, 305K views. The course opens with the solid-state physics underneath the circuits, then 102N follows with doping, carrier density and distributions (38 minutes)." },
  { tag: "Cornell · Lecture 1", title: "Drude model, Quantum Mechanics", body: "1 hour 20, from the 2017 run of the course. Lecture 2 covers metals and electron wave mechanics, lecture 3 the Sommerfeld model, each about 80 minutes." },
  { tag: "ETH Zürich · Lecture 1", title: "Introduction and Basics", body: "1 hour 33, 182K views, the most watched opener of the three. Lecture 2a, course goals and logistics, is a shorter 23 minutes." },
];

function card(item) {
  const el = document.createElement("article");
  el.className = "card";
  const count = document.createElement("div");
  count.className = "count";
  count.textContent = item.tag;
  const h = document.createElement("h3");
  h.textContent = item.title;
  const p = document.createElement("p");
  p.textContent = item.body;
  el.append(count, h, p);
  return el;
}

document.getElementById("courses").replaceChildren(...courses.map(card));
document.getElementById("lectures").replaceChildren(...lectures.map(card));
