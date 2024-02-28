const blogTemplate = (data) => {
    return `<div class="col-md-4 d-flex">
    <div class="blog-entry">
        <a href="single.html?${data.id}" class="block-20" style="background-image: url('images/${data.image}');">
        </a>
        <div class="text mt-3 float-right d-block">
            <div class="d-flex align-items-center mb-3 meta">
                <p class="mb-0">
                    <span class="mr-2">${data.date}</span>
                    <a href="#" class="mr-2">${data.author}</a>
                    <a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a>
                </p>
            </div>
            <h3 class="heading"><a href="single.html?${data.id}">${data.title}</a>
            </h3>
            <p>${data.label}</p>
        </div>
    </div>
</div>`
}

fetch('../data/blogs.json').then(r => {
    return r.json()
}).then(d => {
    let blogs = ""
    d.forEach(blog => {
        blogs += blogTemplate(blog)
    });

    document.querySelector('#blog-container').innerHTML = blogs
})