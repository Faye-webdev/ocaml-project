if [ -t 0 ]; then
  test -r /home/efayemi16/.opam/opam-init/complete.sh && . /home/efayemi16/.opam/opam-init/complete.sh > /dev/null 2> /dev/null || true

  test -r /home/efayemi16/.opam/opam-init/env_hook.sh && . /home/efayemi16/.opam/opam-init/env_hook.sh > /dev/null 2> /dev/null || true
fi

test -r /home/efayemi16/.opam/opam-init/variables.sh && . /home/efayemi16/.opam/opam-init/variables.sh > /dev/null 2> /dev/null || true
