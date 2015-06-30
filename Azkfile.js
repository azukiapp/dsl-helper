/**
 * Documentation: http://docs.azk.io/Azkfile.js
 */
// Adds the systems that shape your system
systems({
  'dsl-helper': {
    // Dependent systems
    depends: [],
    // More images:  http://images.azk.io
    image: {"docker": "azukiapp/node"},
    // Steps to execute before running instances
    provision: [
      "npm install",
    ],
    workdir: "/azk/#{manifest.dir}",
    shell: "/bin/bash",
    mounts: {
      '/azk/#{manifest.dir}': sync(".", { shell: true }),
      '/azk/#{manifest.dir}/lib': persistent("#{system.name}/lib"),
      '/azk/#{manifest.dir}/node_modules': persistent("#{system.name}/node_modules"),
    },
    envs: {
      NODE_ENV: "dev",
      PATH: "/azk/#{manifest.dir}/node_modules/.bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
    },
  },
});
