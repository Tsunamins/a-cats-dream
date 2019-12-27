export default class Magic extends Phaser.Physics.Arcade.Sprite{
    constructor(scene){
        super(this, scene, 0, 0, 'magic')

        //this.scene = scene;
        this.speed = 1;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.setSize(12, 12, true);
    }




    //a fire function
    fire(player){
        this.setPosition(player.x, player.y);
            if (player.flipX){
                      //shooting to left
                      this.speed = Phaser.Math.GetSpeed(-1000, 1);
                  } else {
                      //shooting to right
                      this.speed = Phaser.Math.GetSpeed(1000, 1);
                  }
                  this.born = 0;
    }

    update(time, delta){
        this.x += this.speed * delta;
        this.born += delta;
        if (this.born > 1000){
            this.setActive(false);
            this.setVisible(false);
        }

    }

}