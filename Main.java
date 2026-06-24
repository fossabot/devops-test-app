import java.sql.*;

public class Main {

    // S3649: SQL Injection - CRITICAL Vulnerability (SonarQube CE Java taint analysis)
    public static ResultSet getUser(Connection conn, String username) throws SQLException {
        Statement stmt = conn.createStatement();
        return stmt.executeQuery("SELECT * FROM users WHERE name = '" + username + "'");
    }

    // S3649: SQL Injection - CRITICAL Vulnerability
    public static ResultSet getProduct(Connection conn, String productId) throws SQLException {
        Statement stmt = conn.createStatement();
        return stmt.executeQuery("SELECT * FROM products WHERE id = " + productId);
    }

    // S3649: SQL Injection - CRITICAL Vulnerability
    public static void deleteUser(Connection conn, String userId) throws SQLException {
        Statement stmt = conn.createStatement();
        stmt.execute("DELETE FROM users WHERE id = " + userId);
    }
}
