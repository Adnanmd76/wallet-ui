`hello-world.clar`**
```clarity
;; hello-world.clar
;; This is a simple "Hello World" smart contract in Clarity.

;; --- Read-Only Functions ---
;; These functions can read the state of the blockchain but cannot change it.
;; They are free to call.

(define-read-only (say-hello)
  ;; This function returns the string "Hello World"
    (ok "Hello World, from your first smart contract!")
    )

    (define-read-only (say-hi (name (string-ascii 40)))
        ;; This function takes a name as input and returns a personalized greeting.
            (ok (concat "Hi, " name))
            )```