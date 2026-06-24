import java.io.StringReader;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.transform.stream.StreamSource;
import javax.xml.validation.SchemaFactory;
import org.w3c.dom.Document;
import org.xml.sax.InputSource;

public class XmlParser {

    // S2755: XML parsers should not be vulnerable to XXE - VULNERABILITY (SonarQube CE)
    // Missing setFeature to disable DOCTYPE and external entities
    public Document parseUserXml(String xmlInput) throws Exception {
        DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
        DocumentBuilder db = dbf.newDocumentBuilder();
        return db.parse(new InputSource(new StringReader(xmlInput)));
    }

    // S2755: Another XXE vulnerability instance
    public Document parseConfig(String configXml) throws Exception {
        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
        factory.setNamespaceAware(true);
        DocumentBuilder builder = factory.newDocumentBuilder();
        return builder.parse(new InputSource(new StringReader(configXml)));
    }

    // S2755: Schema validation without XXE protection
    public void validateXml(String xmlInput) throws Exception {
        SchemaFactory sf = SchemaFactory.newInstance("http://www.w3.org/2001/XMLSchema");
        sf.newSchema(new StreamSource(new StringReader(xmlInput)));
    }
}
