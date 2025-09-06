package service;

public interface AuthInterface {
    void register(String name, String email, String password);
    void login(String email, String password);
}
