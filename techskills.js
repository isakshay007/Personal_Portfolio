const techSkills = [
    {
      name: "HTML",
      icon: "fab fa-html5",
      color: "#fff",      // icon color
      background: "#000"  // background or hover background
    },
    {
        name: "CSS",
        icon: "fab fa-css3-alt",
        color: "#000",
        background: "#fff"
      }, 
       {
        name: "Jira",
        icon: "fas fa-clipboard-list",
        color: "#2684FF",
        background: "#fff"
      },
      {
        name: "Python",
        icon: "fab fa-python",
        color: "#fff",
        background: "#3776ab"  // Python blue
      }
  ];
  
  const wrapper = document.querySelector(".tech-stack-wrapper");
  
  techSkills.forEach(skill => {
    const li = document.createElement("li");
    li.className = "tech-stack-box";
    li.setAttribute("data-aos", "fade-up");
  
    li.innerHTML = `
      <div class="icon-wrapper" style="background-color: ${skill.background}; border-radius: 8px; padding: 12px;">
        <i class="${skill.icon} tech-stack-logo" style="color: ${skill.color};"></i>
      </div>
      <span class="tooltip">${skill.name}</span>
    `;
  
    wrapper.appendChild(li);
  });
  