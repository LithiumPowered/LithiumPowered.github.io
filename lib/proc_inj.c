#include <stdio.h>
#include <windows.h>
#include <stdarg.h>

#define okay(msg, ...) printf("[+] " msg "\n", ##__VA_ARGS__)
#define info(msg, ...) printf("[*] " msg "\n", ##__VA_ARGS__)
#define warn(msg, ...) printf("[-] " msg "\n", ##__VA_ARGS__)

DWORD PID = NULL;
HANDLE hProcess hThread = NULL;

int main(int argc, char *argv[]) {

  if (argc < 2) {
    warn("usage: %s <pid>", argv[0]);
    return 1;
  }

  PID = atoi(argv[1]);
  info("trying to open a handle to process (%ld)\n", i, PID);

  return EXIT_SUCCESS;
}
