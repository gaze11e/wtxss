<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:abc="http://php.net/xsl" version="2.0">
    <xsl:template match="/">
        <xsl:value-of select="unparsed-text('/etc/os-release', 'utf-8')"/>
    </xsl:template>
</xsl:stylesheet>