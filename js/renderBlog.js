let id = location.href.split('?')[1]
let blogContainer = document.querySelector('#blog-container')
console.log(id);
if (id != undefined) {
    if (id.includes('#')) {
        id = id.split('#')[0]
    }

    fetch('../data/blogs.json')
        .then(r => { return r.json() })
        .then(d => {
            let searchedBlog
            for (let i = 0; i < d.length; i++) {
                if (d[i].id == id) {
                    searchedBlog = d[i]
                    break
                }
            }
            if (searchedBlog != undefined) {
                blogContainer.innerHTML = blogTemplate(searchedBlog)
            } else {
                blogContainer.innerHTML = `<div class="row text-center"><div class="col"><h1>No Content</h1></div></div>`
            }
        })

} else {
    blogContainer.innerHTML = `<div class="row text-center"><div class="col"><h1>No Content</h1></div></div>`
}




const blogTemplate = (data) => {

    let tags = '', tagsContent, paragraphs = '', image, label, title
    tagsContent = data.content.tags
    title = data.title
    label = `<p>${data.label}</p>`
    image = data.image
    for (let i = 0; i < tagsContent.length; i++) {
        tags += `<a href="#" class="tag-cloud-link">${tagsContent[i]}</a>`
    }


    document.querySelector('#blog-title-headline').innerHTML = title
    document.querySelector('#image-headline').style.backgroundImage = `url('images/${image}')`

    return `<div class="col-lg-8">
                <h2 class="mb-3">${title}</h2>
                    ${label}
                    <img src="images/${image}" alt="image blog" class="img-fluid">
                </p>
                <p>Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt
                    doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam
                    incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit.
                    Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!</p>

      
        <div class="tag-widget post-tag-container mb-5 mt-5">
            <div class="tagcloud">
            ${tags}
            </div>
        </div>
    </div>

    <div class="col-lg-4 sidebar">
        <div class="sidebar-box">
            <h3 class="heading-sidebar">Tag Cloud</h3>
            <div class="tagcloud">
                ${tags}
            </div>
        </div>

        <div class="sidebar-box">
            <h3 class="heading-sidebar">Label</h3>
            ${label}
        </div>
    </div>`

}
