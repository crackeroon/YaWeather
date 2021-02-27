MAKEFILE_PATH := $(abspath $(lastword $(MAKEFILE_LIST)))
MAKEFILE_DIR  := $(patsubst %/,%,$(dir $(MAKEFILE_PATH)))

.PHONY: run serve

run:
	docker run --rm -it -v $(MAKEFILE_DIR):/Sources -p 8100:8100 -p 35729:35729 \
		-p 53703:53703 --user=0 marcomaisel/ionic:latest /Sources/entrypoint.sh

serve:
	ionic serve --address=0.0.0.0

