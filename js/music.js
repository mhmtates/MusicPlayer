class Music{
    constructor(title,singer,img,file){
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName(){
        return this.title;
    }
}

const musicList = [
    new Music("Bir Bahar Akşamı","Yalın","Yalın-Bir-Bahar-Akşamı.jpg","Yalın-Bir-Bahar-Akşamı.mp3"),
    new Music("Üzülmedin Mi","Simge","simge-uzulmedin-mi.jpg","simge-uzulmedin-mi.mp3"),
    new Music("Mahşer","Gökhan Türkmen","GÖKHAN-TÜRKMEN-MAHŞER.jpg","GÖKHAN-TÜRKMEN-MAHŞER.mp3"),
    new Music("Masal Gibi","Semicenk","Semicenk-Masal-Gibi.jpg","Semicenk-Masal-Gibi.mp3"),
    new Music("Leila","Reynmen","Reynmen-Leila.jpg","Reynmen-Leila.mp3"),
    new Music("Niggas In Paris","Jay-Z & Kanye West","Jay Z ft. Kanye West - Niggas-in-Paris.jpg","Jay Z ft. Kanye West - Niggas-in-Paris.mp3"),
    new Music("Saki","Sıla","sıla-saki.jpg","sıla-saki.mp3"),
    new Music("Mi Gna","Super Sako & Spitakci Hayko","super-sako-mi-gna-ft-hayko.jpg","super-sako-mi-gna-ft-hayko.mp3"),
    new Music("366.Gün","Sagopa Kajmer","Sagopa-366.Gün.jpg","Sagopa-366.Gün.mp3"),
    new Music("Alaz Alaz","Buray","Buray-Alaz-Alaz.jpg","Buray-Alaz-Alaz.mp3"),
    new Music("Harbi Güzel","Murat Boz","murat-boz-harbi-guzel.jpg","murat-boz-harbi-guzel.mp3"),
    new Music("Bi Tek Ben Anlarım","Köfn","köfn-bi-tek-ben-anlarım.jpg","köfn-bi-tek-ben-anlarim.mp3"),


]