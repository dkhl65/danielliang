function Projectile() {
  return (
    <>
      <h2 id="projectile">Projectile (2017)</h2>
      <p>
        This is my Grade 12 Computer Science (ICS4U0) final project that I
        worked on with one other student. For this project, we find a teacher in
        the school to act as a client and provide requirements for the software
        we write. We found a physics teacher, who gave us requirements for a
        projectile simulator that demonstrates Grade 12 kinematics concepts.
      </p>
      <p>
        The user interface was created using the Swing library in Java. The
        GitHub repository is{" "}
        <a
          href="https://github.com/dkhl65/Projectile-2017"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        . The project files are{" "}
        <a
          href="https://1drv.ms/u/s!Arlw0YD7zqYNhmGUaiE6Gq8jgkO6"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        . The user manual is included in both links.
      </p>
      <p>
        This software animates a projectile shot from a cannon without air
        resistance. The animation can be paused. A blue line shows the path of
        the projectile. In Default mode, the user freely inputs anything in the
        initial values. The projectile will stick to the bullseye of that target
        if it is in the path. If it is not, then the projectile will stop upon
        hitting the ground.
      </p>
      <p>
        There are four other modes where the user enters some of values, then
        the simulator will solve the missing value(s) in the name of the mode in
        order to hit the target bullseye.
      </p>
      <li>Initial Angle Mode</li>
      <li>Initial Speed Mode</li>
      <li>Initial Angle, Initial Speed and Target Distance Mode</li>
      <li>Cannon Height Mode</li>
      <br />
      <img
        alt="projectile"
        src="https://sat02pap005files.storage.live.com/y4mx0epQMhlW9QeBU1BLhVWh_zn0rUg4Yocbk7hw_OwqCfZrZ8dXvqqnm_9FappBQkR28NiVrR1faUMyodcrMziCWx-KzUGWiRmvIDT9-usj3bZoVSVMGSH15BRpvLyxxiaw913dmDmUvOyslFPriTNaiQPxX_mwEMd0A1KNuMviKedBr_JYBvcf6TKwxoO-_ag?width=931&height=539&cropmode=none"
      />
      <div>
        An example using the Default simulation mode. The Current Values are
        updated live as the animation plays.
      </div>
    </>
  );
}

export default Projectile;
