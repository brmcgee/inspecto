let pre = `http://localhost:1987`;
pre = `https://www.brmnow.com`;

function bmUser(){
   let obj =         
   {    'username': 'brian',
        'token': '987779tk99mirage724787996603338475hddsAlpha$221@**52Dffewq562204j3m6b8KK*7%bbb', 
        // 'token': 'thisisavalidtokentogetmealltheaccess9966313131', 
        'avatar': 'https://www.brmcontractors.net/blog/assets/gallery/brian.jpg', 
        'role': 'system', 
        'id': '2'
    }
        return obj
}

async function handleFetch(url, method, data, callSuccess, callFail) {
    method = method.toLowerCase()

    if (method == 'post') {
        let xhr = $.post(url, data, function(payload){
            console.log(`${method} connected ${url}`)
        })
        xhr.done(function(payload){
            (payload ? callSuccess(payload) : callFail({'status':200, 'statusText' : 'No dataset available'}))
        })
        xhr.fail(function(err){
            callFail(err)
        })

    }

    if (method == 'get') {
        let xhr = $.get(url, data, function(payload){
            console.log(`${method} connected ${url}`)
        })
        xhr.done(function(payload){
            (payload ? callSuccess(payload) : callFail({'status':200, 'statusText' : 'No dataset available'}))
        })
        xhr.fail(function(err){
            callFail(err)
        })

    }
    
}


// handleFetch(`${pre}/invoices`, 'post', bmUser(), showSuccess, showFail)

function showSuccess(d){
    console.log(d)
}
function showFail(d){
    console.log(d.status + ' ' + d.statusText)
}


document.getElementById('root').addEventListener("click", () => { 
 
    
    console.log(getCursor(this))
})

