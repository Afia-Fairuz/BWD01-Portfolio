let visitorCount = 0;


document.getElementById('sendButton').addEventListener('click', function () {

    visitorCount++;


    document.getElementById('visitorCount').textContent = visitorCount;


    document.getElementById('contactForm').reset();


    console.log('Visitor count:', visitorCount);
});
