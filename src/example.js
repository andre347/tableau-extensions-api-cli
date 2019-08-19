module.exports = trexExample = `<?xml version="1.0" encoding="utf-8"?>
<manifest manifest-version="0.1"
    xmlns="http://www.tableau.com/xml/extension_manifest">
    <dashboard-extension id="com.example.extensions.name" extension-version="0.1.0">
        <default-locale>en_US</default-locale>
        <name resource-id="name">Name</name>
        <description>Extension Description</description>
        <author name="USERNAME" email="USER@example.com" organization="My Company" website="https://www.example.com"/>
        <min-api-version>1.0</min-api-version>
        <source-location>
            <url></url>
        </source-location>
        <icon></icon>
        <context-menu>
        </context-menu>
    </dashboard-extension>
    <resources>
        <resource id="name">
            <text locale="en_US">name in English</text>
        </resource>
    </resources>
</manifest>
`;
