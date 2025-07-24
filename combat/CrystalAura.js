ModAPI.add("CrystalAura", "Auto attacks nearby crystals", function () {
    this.onEnable = function () {
        Chat.log("CrystalAura enabled");
    };

    this.onTick = function () {
        let range = 4.5;
        for (let entity of World.getEntities()) {
            if (entity.getName().includes("End Crystal") && Player.distanceTo(entity) < range) {
                Player.attack(entity);
                World.spawnParticle("crit", entity.getX(), entity.getY(), entity.getZ(), 0, 0.1, 0);
            }
        }
    };
});
