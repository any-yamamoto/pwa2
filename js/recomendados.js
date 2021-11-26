const d = document;
const videos = ["https://www.youtube.com/embed/7QOd91vtYaM", 
        "https://www.youtube.com/embed/-UhtvnTQhHQ",
        "https://www.youtube.com/embed/vW-PHNZ-Xww",
        "https://www.youtube.com/embed/0qvWul3smJ0",
        "https://www.youtube.com/embed/JGYizS6kRTE", 
        "https://www.youtube.com/embed/FUP3P9_mqvA", 
        "https://www.youtube.com/embed/evv5spvCYJY"];

     
        let url = '';
        url = videos[Math.floor(Math.random() * videos.length)];

        let video = d.getElementById('video');
       
        video.setAttribute('src', url);
       
       