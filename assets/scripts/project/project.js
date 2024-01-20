const projects = document.querySelector('.js-projects');
const addProject = (id, title, para) => {
    const proj = `<div class="w-full rounded-xl px-7 py-8 shadow-[17px_17px_200px_rgba(64,69,79,.06)]">
                    <div class="group mb-6 flex items-center justify-between">
                        <img
                            src="./assets/images/project/${id}.png"
                            alt=""
                            class="size-[52px] rounded-xl border border-[#f1f3f6] transition-all group-hover:translate-x-3" />
                        <button
                            class="flex items-center gap-2 rounded-xl bg-[#f1f3f6] px-4 py-2 hover:border hover:border-black">
                            More
                            <img src="./assets/images/project/plus.svg" alt="" />
                        </button>
                    </div>
                    <h3 class="mb-2 text-2xl font-bold">${title}</h3>
                    <p class="text-[#40454f]">${para}</p>
                </div>`;
    projects.innerHTML += proj;
};
fetch('./assets/scripts/project/projects.json')
    .then((response) => response.json())
    .then((data) => {
        data.projects.forEach((proj) => {
            addProject(proj.id, proj.title, proj.para);
        });
    });