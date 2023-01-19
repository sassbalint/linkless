
all: zip

zip:
	zip -r -FS ../linkless.xpi * --exclude '*.git*'

