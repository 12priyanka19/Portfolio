let project1=document.querySelectorAll('.project');
let proContent=document.querySelectorAll('.pro-content');
console.log(proContent);
// console.log(project1);

// project1.addEventListener("mouseover",()=>
// {
//     console.log("Welcome");
// })

project1.forEach((project)=>
{
    project.addEventListener("mouseover",(e)=>
    {
        let para=e.target.nextElementSibling;
        console.log(e.target.nextElementSibling);
        para.classList.add("project-animate")
        // project.classList.add("project-animate");
        // proContent.forEach((pro)=>
        // {
        //     pro.classList.add("project-animate");
        // })
    })
});

project1.forEach((project)=>
{
    project.addEventListener("mouseout",(e)=>
    {
        let para=e.target.nextElementSibling;
        // para.classList.remove("project-animate");
    })
})

let linkabout=document.querySelector('#linkabout');
let about=document.querySelector(".about");
console.log(about);
linkabout.addEventListener("click",()=>
{
    about.classList.add("aboutAnimate");
})

let body=document.querySelector("");