

async function make_request(url) {

    return await $.ajax({
        url: url,
        method: 'GET',
        dataType: "JSONP"
    });
}