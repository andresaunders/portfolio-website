let max_mobile = 700;
function main(){

     /*let projects_text = 
        `function getProjects(n){\n\n  let first_n_projects = [];\n\n  for(let i = 0; i < n; i++){\n\n    first_n_projects.push(\n      projects[i]);\n\n  }\n\n  return first_n_projects;\n\n}`

        let textarea = document.getElementById('projects');

        textarea.style.height = '300px';

        textarea.style.fontSize = '130%'

        textarea.style.width = '300px';

        Array.from(document.querySelectorAll('img')).map(i => i.style.display = 'none')

        function animateCode(element, code){

            let index = 0;
            let animate = setInterval(()=>{

                if(index >= code.length){
                    
                    clearInterval(animate)
                }
                else{

                    element.textContent += code[index];
                    index++;
                }

            }, 100)

        }

        animateCode(textarea, projects_text)*/

        let arr = [0,1,2]

        let set = new Set([1, {a: 2}, 'c'])

        addListeners();

        formatImages();

        let projects_div = document.getElementById('projects-animation-container');

        let hover_on_color = 'blue';

        let hover_off_color = 'black';

        let links = Array.from(document.querySelectorAll('a[for]'));

        let titles = Array.from(document.querySelectorAll('.link-title'));

        function dimLinks(link, for_attr, mode, state){

            let link_container = link.parentElement;

            let link_image_containers = Array.from(document.querySelectorAll('.link-image-container'));

            let headers = Array.from(document.querySelectorAll('.link-title'));

            let images = Array.from(document.querySelectorAll('img.link-image'));

            let link_image_container = link_container.querySelector('.link-image-container');

            let link_image = link_container.querySelector('img');

            let dimmed_opacity = .5;

            let standard_opacity = 1;

            if(state == 'off'){

                link_image_containers.map(l => {l.style.opacity = standard_opacity;});

                headers.map(h => h.style.color = hover_off_color);

                link_image_container.style.borderColor = 'transparent';
            }
            else{

               link_image_containers.filter(l => l != link_image_container)
               .map(l => l.style.opacity = dimmed_opacity);

                let a1 = headers.filter(h => !Array.from(h.classList).includes(for_attr));

                let a2 = a1.map(h => {h.style.color = 'gray'});

                headers.filter(h => Array.from(h.classList).includes(for_attr))
                .map(h => h.style.color = hover_on_color);

                link_image_container.style.borderColor = 'lightblue'; 
            }
        }

        function mouseEventListener(event, event_type, link){

        
            let state = event_type == 'mouseenter'? 'on' : 'off';

            let mode = window.screen.width <= max_mobile ? '.mobile' : '.desktop';

            let for_attr = link.getAttribute('for');

            let selector = '.' + for_attr;

            let title = document.querySelector(`${selector}${mode}`);

            dimLinks(link, for_attr, mode, state);
        }

        links.map(link => {

            link.addEventListener('mouseenter', e => mouseEventListener(e, 'mouseenter', link))

            link.addEventListener('mouseleave', e => mouseEventListener(e, 'mouseleave', link))
        })

        titles.map(title => {

            title.addEventListener('mouseenter', (e)=> {

                let mouse_e = 'mouse enter';

                title.style.color = hover_on_color;
            })

            title.addEventListener('mouseleave', (e)=> {

                let mouse_e = 'mouse leave';

                title.style.color = hover_off_color;
            })
        })
}

function formatImages(){

    let screen_width = window.innerWidth;

    let link_container_percent = screen_width <= max_mobile ? .75 : .25

    let link_image_width_percent = .8*link_container_percent

    let link_image_height_width_ratio = 1.2;
    
    let link_images = Array.from(document.querySelectorAll('.link-image'));

    let image_height = `${screen_width*link_image_width_percent*link_image_height_width_ratio}px`

    link_images.map(i => i.style.height = image_height)
}

function addListeners(){

    window.addEventListener('resize', ()=>{

        let resize = Date.now();

        formatImages();
    })
}

main();