(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{308:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"configuring-shadow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-shadow"}},[t._v("#")]),t._v(" Configuring Shadow")]),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"https://gradleup.com/shadow/api/com/github/jengelman/gradle/plugins/shadow/tasks/ShadowJar.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("ShadowJar")]),a("OutboundLink")],1),t._v(" task type extends from Gradle's\n"),a("a",{attrs:{href:"https://docs.gradle.org/current/dsl/org.gradle.api.tasks.bundling.Jar.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Jar")]),a("OutboundLink")],1),t._v(" type.\nThis means that all attributes and methods available on "),a("code",[t._v("Jar")]),t._v(" are also available on\n"),a("a",{attrs:{href:"https://gradleup.com/shadow/api/com/github/jengelman/gradle/plugins/shadow/tasks/ShadowJar.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("ShadowJar")]),a("OutboundLink")],1),t._v(".\nRefer the "),a("em",[t._v("Gradle User Guide")]),t._v(" for "),a("a",{attrs:{href:"https://docs.gradle.org/current/dsl/org.gradle.api.tasks.bundling.Jar.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jar"),a("OutboundLink")],1),t._v(" for\ndetails.")]),t._v(" "),a("h2",{attrs:{id:"configuring-output-name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-output-name"}},[t._v("#")]),t._v(" Configuring Output Name")]),t._v(" "),a("p",[t._v("Shadow configures the default "),a("code",[t._v("shadowJar")]),t._v(" task to set the output JAR's "),a("code",[t._v("destinationDirectory")]),t._v(", "),a("code",[t._v("archiveBaseName")]),t._v(", "),a("code",[t._v("appendix")]),t._v(",\n"),a("code",[t._v("archiveVersion")]),t._v(", and "),a("code",[t._v("extension")]),t._v(" to the same default values as Gradle does for all "),a("code",[t._v("Jar")]),t._v(" tasks.\nAdditionally, it configures the "),a("code",[t._v("archiveClassifier")]),t._v(" to be "),a("code",[t._v("all")]),t._v(".")]),t._v(" "),a("p",[t._v("If working with a Gradle project with the name "),a("code",[t._v("myApp")]),t._v(" and archiveVersion "),a("code",[t._v("1.0")]),t._v(", the default "),a("code",[t._v("shadowJar")]),t._v(" task will output a\nfile at: "),a("code",[t._v("build/libs/myApp-1.0-all.jar")])]),t._v(" "),a("p",[t._v("As with all "),a("code",[t._v("Jar")]),t._v(" tasks in Gradle, these values can be overridden:")]),t._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Output to build/libs/shadow.jar")]),t._v("\ntasks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("named")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'shadowJar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jengelman"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gradle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shadow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tasks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ShadowJar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   archiveBaseName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'shadow'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   archiveClassifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   archiveVersion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"configuring-the-runtime-classpath"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-runtime-classpath"}},[t._v("#")]),t._v(" Configuring the Runtime Classpath")]),t._v(" "),a("p",[t._v("Each Java JAR file contains a manifest file that provides meta data about the contents of the JAR file itself.\nWhen using a shadowed JAR file as an executable JAR, it is assumed that all necessary runtime classes are contained\nwithin the JAR itself.\nThere may be situations where the desire is to "),a("strong",[t._v("not")]),t._v(" bundle select dependencies into the shadowed JAR file but\nthey are still required for runtime execution.")]),t._v(" "),a("p",[t._v("In these scenarios, Shadow creates a "),a("code",[t._v("shadow")]),t._v(" configuration to declare these dependencies.\nDependencies added to the "),a("code",[t._v("shadow")]),t._v(" configuration are "),a("strong",[t._v("not")]),t._v(" bundled into the output JAR.\nThink of "),a("code",[t._v("configurations.shadow")]),t._v(" as unmerged, runtime dependencies.\nThe integration with the "),a("code",[t._v("maven-publish")]),t._v(" plugin will automatically configure dependencies added\nto "),a("code",[t._v("configurations.shadow")]),t._v(" as "),a("code",[t._v("RUNTIME")]),t._v(" scope dependencies in the resulting POM file.")]),t._v(" "),a("p",[t._v("Additionally, Shadow automatically configures the manifest of the "),a("code",[t._v("shadowJar")]),t._v(" task to contain a "),a("code",[t._v("Class-Path")]),t._v(" entry\nin the JAR manifest.\nThe value of the "),a("code",[t._v("Class-Path")]),t._v(" entry is the name of all dependencies resolved in the "),a("code",[t._v("shadow")]),t._v(" configuration\nfor the project.")]),t._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[t._v("dependencies "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  shadow "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'junit:junit:3.8.2'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Inspecting the "),a("code",[t._v("META-INF/MANIFEST.MF")]),t._v(" entry in the JAR file will reveal the following attribute:")]),t._v(" "),a("div",{staticClass:"language-property extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Class-Path: junit-3.8.2.jar\n")])])]),a("p",[t._v("When deploying a shadowed JAR as an execution JAR, it is important to note that any non-bundled runtime dependencies\n"),a("strong",[t._v("must")]),t._v(" be deployed in the location specified in the "),a("code",[t._v("Class-Path")]),t._v(" entry in the manifest.")]),t._v(" "),a("h2",{attrs:{id:"configuring-the-jar-manifest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-jar-manifest"}},[t._v("#")]),t._v(" Configuring the JAR Manifest")]),t._v(" "),a("p",[t._v("Beyond the automatic configuration of the "),a("code",[t._v("Class-Path")]),t._v(" entry, the "),a("code",[t._v("shadowJar")]),t._v(" manifest is configured in a number of ways.\nFirst, the manifest for the "),a("code",[t._v("shadowJar")]),t._v(" task is configured to "),a("strong",[t._v("inherit")]),t._v(" from the manifest of the standard "),a("code",[t._v("jar")]),t._v(" task.\nThis means that any configuration performed on the "),a("code",[t._v("jar")]),t._v(" task will propagate to the "),a("code",[t._v("shadowJar")]),t._v(" tasks.")]),t._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[t._v("jar "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   manifest "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       attributes "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Class-Path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/libs/a.jar'")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Inspecting the "),a("code",[t._v("META-INF/MANIFEST.MF")]),t._v(" entry in the JAR file will reveal the following attribute:")]),t._v(" "),a("div",{staticClass:"language-property extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Class-Path: /libs/a.jar\n")])])]),a("p",[t._v("If it is desired to inherit a manifest from a JAR task other than the standard "),a("code",[t._v("jar")]),t._v(" task, the "),a("code",[t._v("inheritFrom")]),t._v(" methods\non the "),a("code",[t._v("shadowJar.manifest")]),t._v(" object can be used to configure the upstream.")]),t._v(" "),a("div",{staticClass:"language-groovy extra-class"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[t._v("task "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("testJar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Jar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  manifest "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    attributes "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Description'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'This is an application JAR'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ntasks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("named")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'shadowJar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jengelman"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gradle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shadow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tasks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ShadowJar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  manifest "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("inheritFrom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("project"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tasks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("testJar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("manifest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);