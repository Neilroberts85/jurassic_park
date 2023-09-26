class Park {
    constructor(name, ticketprice) {
        this.name = name
        this.ticketprice = ticketprice
        this.dinosaurs = []
}
    addDinosaur(dinosaur){
        this.dinosaurs.push(dinosaur)
    }

    removeDinosaur(dinosaur){
        const indexOfDinosaurs = this.dinosaurs.indexOf(dinosaur)
        this.dinosaurs.splice(indexOfDinosaurs, 1)
    }

    findMostPopularDinosaur() {
        let guestsAttractedByEachDino = 0
        let mostPopularDinosaur = null
      
        for (const dinosaur of this.dinosaurs) {
          if (dinosaur.guestsAttractedPerDay > guestsAttractedByEachDino) {
            guestsAttractedByEachDino = dinosaur.guestsAttractedPerDay;
            mostPopularDinosaur = dinosaur
          }
        }
        return mostPopularDinosaur
      }
      }
    



    module.exports = Park