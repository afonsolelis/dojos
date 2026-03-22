CC = gcc
CFLAGS = -Wall -Wextra -g

all: test

test: solution.c test.c
	$(CC) $(CFLAGS) -o test solution.c test.c
	./test

clean:
	rm -f test
