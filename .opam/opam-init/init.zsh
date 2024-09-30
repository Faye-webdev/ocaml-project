if [[ -o interactive ]]; then
  [[ ! -r /home/efayemi16/.opam/opam-init/complete.zsh ]] || source /home/efayemi16/.opam/opam-init/complete.zsh  > /dev/null 2> /dev/null

  [[ ! -r /home/efayemi16/.opam/opam-init/env_hook.zsh ]] || source /home/efayemi16/.opam/opam-init/env_hook.zsh  > /dev/null 2> /dev/null
fi

[[ ! -r /home/efayemi16/.opam/opam-init/variables.sh ]] || source /home/efayemi16/.opam/opam-init/variables.sh  > /dev/null 2> /dev/null
