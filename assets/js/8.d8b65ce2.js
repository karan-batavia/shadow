(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{180:function(e,t,r){"use strict";r.r(t);var n=r(0),a=Object(n.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/mark-vieira",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mark Vieira"),r("OutboundLink")],1),e._v(" - Don't leak plugin classes to Gradle's Spec cache "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/pull/430",target:"_blank",rel:"noopener noreferrer"}},[e._v("#430"),r("OutboundLink")],1)])]),e._v(" "),e._m(2),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/petarov",target:"_blank",rel:"noopener noreferrer"}},[e._v("Petar Petrov"),r("OutboundLink")],1),e._v(" - Update to ASM 7.0-beta and jdependency 2.1.1 to support Java 11, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/pull/415",target:"_blank",rel:"noopener noreferrer"}},[e._v("#415"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/roxchkplusony",target:"_blank",rel:"noopener noreferrer"}},[e._v("Victor Tso"),r("OutboundLink")],1),e._v(" - Ensure input streams are closed, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/pull/411",target:"_blank",rel:"noopener noreferrer"}},[e._v("#411"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/osipxd",target:"_blank",rel:"noopener noreferrer"}},[e._v("Osip Fatkullin"),r("OutboundLink")],1),e._v(" - Exclude "),r("code",[e._v("api")]),e._v(" configuration from minimization, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/pull/405",target:"_blank",rel:"noopener noreferrer"}},[e._v("#405"),r("OutboundLink")],1)])]),e._v(" "),e._m(3),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Breaking Change!")]),e._v(" "),r("code",[e._v("Transform.modifyOutputStream(ZipOutputStream os)")]),e._v("  to "),r("code",[e._v("Transform.modifyOutputStream(ZipOutputStream jos, boolean preserveFileTimestamps)")]),e._v(".\nTypically breaking changes are reserved for major version releases, but this change was necessary for "),r("code",[e._v("preserverFileTimestamps")]),e._v(" (introduced in v4.0.0) to work correctly\nin the presence of transformers, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/404",target:"_blank",rel:"noopener noreferrer"}},[e._v("#404"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Fix regression in support Java 10+ during relocation, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/403",target:"_blank",rel:"noopener noreferrer"}},[e._v("#403"),r("OutboundLink")],1)])]),e._v(" "),e._m(4),e._v(" "),r("ul",[e._m(5),e._v(" "),r("li",[r("strong",[e._v("Breaking Change!")]),e._v(" For clarity purposes "),r("code",[e._v("com.github.johnrengelman.plugin-shadow")]),e._v(" has been removed. If you intend to use this feature, you will need to declare your own "),r("code",[e._v("ConfigureShadowRelocation")]),e._v(" task. See section "),r("a",{attrs:{href:"http://imperceptiblethoughts.com/shadow/#automatically_relocating_dependencies",target:"_blank",rel:"noopener noreferrer"}},[e._v("2.9.2"),r("OutboundLink")],1),e._v(" of the User Guide")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/SerCeMan",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sergey Tselovalnikov"),r("OutboundLink")],1),e._v(" - Upgrade to ASM 6.2.1 to support Java 11")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/Macil",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chris Cowan"),r("OutboundLink")],1),e._v(" - Add support for "),r("code",[e._v("shadowJar.preserveFileTimestamps")]),e._v(" property. See "),r("a",{attrs:{href:"https://docs.gradle.org/current/dsl/org.gradle.api.tasks.bundling.Jar.html#org.gradle.api.tasks.bundling.Jar:preserveFileTimestamps",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jar.preserveFileTimestamps"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/paul-nelson-baker",target:"_blank",rel:"noopener noreferrer"}},[e._v("Paul N. Baker"),r("OutboundLink")],1),e._v(" - Add "),r("code",[e._v("Log4j2PluginsCacheFileTransformer")]),e._v(" to process Log4j DAT files during merge.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/felipecsl",target:"_blank",rel:"noopener noreferrer"}},[e._v("Felipe Lima"),r("OutboundLink")],1),e._v(' - Fix the long standing "No property '),r("code",[e._v("mainClassName")]),e._v('" issue.')]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/debanne",target:"_blank",rel:"noopener noreferrer"}},[e._v("debanne"),r("OutboundLink")],1),e._v(" - Implement JAR minimization actions. This will attempt to exclude unused classes in your shadowed JAR.")]),e._v(" "),r("li",[e._v("Configure exclusion of "),r("code",[e._v("module-info.class")]),e._v(" from "),r("code",[e._v("shadowJar")]),e._v(" when using the Shadow the Java plugin, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/352",target:"_blank",rel:"noopener noreferrer"}},[e._v("#352"),r("OutboundLink")],1)])]),e._v(" "),e._m(6),e._v(" "),r("ul",[r("li",[e._v("Update to ASM 6.1.1 to address performance issues - "),r("a",{attrs:{href:"https://gitlab.ow2.org/asm/asm/issues/317816",target:"_blank",rel:"noopener noreferrer"}},[e._v("ASM Issue 317816"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Close InputStreams after using them, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/364",target:"_blank",rel:"noopener noreferrer"}},[e._v("#364"),r("OutboundLink")],1)]),e._v(" "),e._m(7),e._v(" "),r("li",[e._v("Add task annotations to remove warnings when validating plugin.")])]),e._v(" "),e._m(8),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/ttsiebzehntt",target:"_blank",rel:"noopener noreferrer"}},[e._v("Martin Sadowski"),r("OutboundLink")],1),e._v(" - Update to ASM 6.1")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/sgnewson",target:"_blank",rel:"noopener noreferrer"}},[e._v("Scott Newson"),r("OutboundLink")],1),e._v(" - Fix deprecated Gradle warnings, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/pull/356",target:"_blank",rel:"noopener noreferrer"}},[e._v("#356"),r("OutboundLink")],1)])]),e._v(" "),e._m(9),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/ben-adazza",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ben Adazza"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://github.com/tylerbenson",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tyler Benson"),r("OutboundLink")],1),e._v(" - documentation")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/mark-vieira",target:"_blank",rel:"noopener noreferrer"}},[e._v("Marke Vieira"),r("OutboundLink")],1),e._v(" - Support multi-project builds with Build-Scan integration")]),e._v(" "),r("li",[e._v("Upgrade to ASM 6, [#294]https://github.com/johnrengelman/shadow/issues/294, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/303",target:"_blank",rel:"noopener noreferrer"}},[e._v("#303"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/rspieldenner",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rob Spieldenner"),r("OutboundLink")],1),e._v(" - Fix integration with "),r("code",[e._v("application")]),e._v(" plugin in Gradle 4.3, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/339",target:"_blank",rel:"noopener noreferrer"}},[e._v("#339"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Fixed deprecation warning from Gradle 4.2+, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/326",target:"_blank",rel:"noopener noreferrer"}},[e._v("#326"),r("OutboundLink")],1)])]),e._v(" "),e._m(10),e._v(" "),r("ul",[r("li",[e._v("Fix "),r("code",[e._v("null+configuration")]),e._v(" error, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/297",target:"_blank",rel:"noopener noreferrer"}},[e._v("#297"),r("OutboundLink")],1)])]),e._v(" "),e._m(11),e._v(" "),r("ul",[e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),r("li",[e._v("Build Shadow w/ Shadow. This will help prevent any future classpath conflicts with Gradle.")]),e._v(" "),e._m(22),e._v(" "),r("li",[e._v("Build with Gradle 3.1")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/marcphilipp",target:"_blank",rel:"noopener noreferrer"}},[e._v("Marc Philipp"),r("OutboundLink")],1),e._v(" - Add "),r("code",[e._v("keyTransformer")]),e._v(" property to "),r("code",[e._v("PropertiesFileTransformer")])]),e._v(" "),r("li",[e._v("Update to ASM 5.2")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/pkubowicz",target:"_blank",rel:"noopener noreferrer"}},[e._v("Piotr Kubowicz"),r("OutboundLink")],1),e._v(" - Support "),r("code",[e._v("api")]),e._v(", "),r("code",[e._v("implementation")]),e._v(", "),r("code",[e._v("runtimeOnly")]),e._v(" dependency configurations introdcued in Gradle 3.3")])]),e._v(" "),e._m(23),e._v(" "),r("ul",[r("li",[e._v("Don't resolve dependency configurations during config phase, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/129",target:"_blank",rel:"noopener noreferrer"}},[e._v("#128"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Build plugin with Gradle 2.14")]),e._v(" "),r("li",[e._v("Fix docs regarding inheriting Jar manifest, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/251",target:"_blank",rel:"noopener noreferrer"}},[e._v("#251"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/ethankhall",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ethan Hall"),r("OutboundLink")],1),e._v(" - Support projects that configure uploading to Ivy repositories, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/pull/256",target:"_blank",rel:"noopener noreferrer"}},[e._v("#256"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Force task to depend on dependency configuration, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/152",target:"_blank",rel:"noopener noreferrer"}},[e._v("#152"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Do not explode ZIP files into shadow jar, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/196",target:"_blank",rel:"noopener noreferrer"}},[e._v("#196"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/jszakmeister",target:"_blank",rel:"noopener noreferrer"}},[e._v("John Szakmeister"),r("OutboundLink")],1),e._v(" - Preserve timestamps on merged jar entries, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/pull/260",target:"_blank",rel:"noopener noreferrer"}},[e._v("#260"),r("OutboundLink")],1)])]),e._v(" "),e._m(24),e._v(" "),r("ul",[r("li",[e._v("Support for Gradle 2.11-rc-1, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/177",target:"_blank",rel:"noopener noreferrer"}},[e._v("#177"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Convert internal framework to "),r("a",{attrs:{href:"https://docs.gradle.org/current/userguide/test_kit.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gradle TestKit"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/fkorotkov",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fedor Korotkov"),r("OutboundLink")],1),e._v(" - Use BufferedOutputStream when writing the Zip file, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/pull/171%5B",target:"_blank",rel:"noopener noreferrer"}},[e._v("#171"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/hbchai",target:"_blank",rel:"noopener noreferrer"}},[e._v("Haw-Bin Chai"),r("OutboundLink")],1),e._v(" - Quote Jar path in Windows start script as it may contain spaces, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/pull/170",target:"_blank",rel:"noopener noreferrer"}},[e._v("#170"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/siordache",target:"_blank",rel:"noopener noreferrer"}},[e._v("Serban Iordache"),r("OutboundLink")],1),e._v(" - Evaluate relocation specs when merging service descriptors, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/pull/165",target:"_blank",rel:"noopener noreferrer"}},[e._v("#165"),r("OutboundLink")],1)])]),e._v(" "),e._m(25),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/Minecrell",target:"_blank",rel:"noopener noreferrer"}},[e._v("Minecrell"),r("OutboundLink")],1),e._v(" - Gradle 2.5 compatibility, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/147",target:"_blank",rel:"noopener noreferrer"}},[e._v("#147"),r("OutboundLink")],1)])]),e._v(" "),e._m(26),e._v(" "),r("ul",[r("li",[e._v("Apply package relocations to dependency resources, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/114",target:"_blank",rel:"noopener noreferrer"}},[e._v("#114"),r("OutboundLink")],1)])]),e._v(" "),e._m(27),e._v(" "),r("ul",[e._m(28),e._v(" "),r("li",[e._v("Upgrade JDOM library from 1.1 to 2.0.5 (change dependency from "),r("code",[e._v("jdom:jdom:1.1")]),e._v(" to "),r("code",[e._v("org.jdom:jdom2:2.0.5")]),e._v("), "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/98",target:"_blank",rel:"noopener noreferrer"}},[e._v("#98"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Convert ShadowJar.groovy to ShadowJar.java to workaround binary incompatibility introduced by Gradle 2.2, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/106",target:"_blank",rel:"noopener noreferrer"}},[e._v("#106"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Updated ASM library to "),r("code",[e._v("5.0.3")]),e._v(" to support JDK8, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/97",target:"_blank",rel:"noopener noreferrer"}},[e._v("#97"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Allows for regex pattern matching in the "),r("code",[e._v("dependency")]),e._v(" string when including/excluding, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/83",target:"_blank",rel:"noopener noreferrer"}},[e._v("#83"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Apply package relocations to resource files, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/93",target:"_blank",rel:"noopener noreferrer"}},[e._v("#93"),r("OutboundLink")],1)])]),e._v(" "),e._m(29),e._v(" "),r("ul",[r("li",[e._v("fix bug in "),r("code",[e._v("runShadow")]),e._v(" where dependencies from the "),r("code",[e._v("shadow")]),e._v(" configuration are not available, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/94",target:"_blank",rel:"noopener noreferrer"}},[e._v("#94"),r("OutboundLink")],1)])]),e._v(" "),e._m(30),e._v(" "),r("ul",[r("li",[e._v("Fix bug in "),r("code",[e._v("'createStartScripts'")]),e._v(" task that was causing it to not execute "),r("code",[e._v("'shadowJar'")]),e._v(" task, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/90",target:"_blank",rel:"noopener noreferrer"}},[e._v("#90"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Do not include "),r("code",[e._v("null")]),e._v(" in ShadowJar Manifest "),r("code",[e._v("'Class-Path'")]),e._v(" value when "),r("code",[e._v("jar")]),e._v(" task does not specify a value for it, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/92",target:"_blank",rel:"noopener noreferrer"}},[e._v("#92"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("ShadowJar Manifest "),r("code",[e._v("'Class-Path'")]),e._v(" should reference jars from "),r("code",[e._v("'shadow'")]),e._v(" config as relative to location of "),r("code",[e._v("shadowJar")]),e._v(" output, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/91",target:"_blank",rel:"noopener noreferrer"}},[e._v("#91"),r("OutboundLink")],1)])]),e._v(" "),e._m(31),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Breaking Change!")]),e._v(" Fix leaking of "),r("code",[e._v("shadowJar.manifest")]),e._v(" into "),r("code",[e._v("jar.manifest")]),e._v(", "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/82",target:"_blank",rel:"noopener noreferrer"}},[e._v("#82"),r("OutboundLink")],1),e._v("\nTo simplify behavior, the "),r("code",[e._v("shadowJar.appendManifest")]),e._v(" method has been removed. Replace uses with "),r("code",[e._v("shadowJar.manifest")])]),e._v(" "),e._m(32),e._v(" "),e._m(33),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/mhurne",target:"_blank",rel:"noopener noreferrer"}},[e._v("Matt Hurne"),r("OutboundLink")],1),e._v(" - Allow "),r("code",[e._v("ServiceFileTransformer")]),e._v(" to specify include/exclude patterns for\nfiles within the configured path to merge.")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/mhurne",target:"_blank",rel:"noopener noreferrer"}},[e._v("Matt Hurne"),r("OutboundLink")],1),e._v(" - Added "),r("code",[e._v("GroovyExtensionModuleTransformer")]),e._v(" for merging Groovy Extension module\ndescriptor files. The existing "),r("code",[e._v("ServiceFileTransformer")]),e._v(" now excludes Groovy Extension Module descriptors by default.")]),e._v(" "),r("li",[r("code",[e._v("distShadowZip")]),e._v(" and "),r("code",[e._v("distShadowZip")]),e._v(" now contain the shadow library and run scripts instead of the default from the\n"),r("code",[e._v("'application'")]),e._v(" plugin, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/89",target:"_blank",rel:"noopener noreferrer"}},[e._v("#89"),r("OutboundLink")],1)])]),e._v(" "),e._m(34),e._v(" "),r("ul",[r("li",[e._v("Make service files root path configurable for "),r("code",[e._v("ServiceFileTransformer")]),e._v(", "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/72",target:"_blank",rel:"noopener noreferrer"}},[e._v("#72"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("[Andres Almiray](https://github.com/aalmiray - Added PropertiesFileTransformer, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/73",target:"_blank",rel:"noopener noreferrer"}},[e._v("#73"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/brandonkearby",target:"_blank",rel:"noopener noreferrer"}},[e._v("Brandon Kearby"),r("OutboundLink")],1),e._v(" - Fixed StackOverflow when a cycle occurs in the resolved dependency grap, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/pull/69",target:"_blank",rel:"noopener noreferrer"}},[e._v("#69"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Apply Transformers to project resources, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/70",target:"_blank",rel:"noopener noreferrer"}},[e._v("#70"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/71",target:"_blank",rel:"noopener noreferrer"}},[e._v("#71"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/Minecrell",target:"_blank",rel:"noopener noreferrer"}},[e._v("Minecrell"),r("OutboundLink")],1),e._v(" - Do not drop non-class files from dependencies when relocation is enabled, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/61",target:"_blank",rel:"noopener noreferrer"}},[e._v("#61"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Remove support for applying individual sub-plugins by Id (easier maintenance and cleaner presentation in Gradle Portal)")])]),e._v(" "),e._m(35),e._v(" "),r("ul",[e._m(36),e._v(" "),e._m(37),e._v(" "),r("li",[e._v("Support Gradle 2.0, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/66",target:"_blank",rel:"noopener noreferrer"}},[e._v("#66"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Do not override existing 'Class-Path' Manifest attribute settings from Jar configuration. Instead combine, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/65",target:"_blank",rel:"noopener noreferrer"}},[e._v("#65"),r("OutboundLink")],1)])]),e._v(" "),e._m(38),e._v(" "),r("ul",[r("li",[e._v("Fix issue where non-class files are dropped when using relocation, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/58",target:"_blank",rel:"noopener noreferrer"}},[e._v("#58"),r("OutboundLink")],1)]),e._v(" "),e._m(39),e._v(" "),r("li",[e._v("Fix "),r("code",[e._v("runShadow")]),e._v(" task to evaluate the "),r("code",[e._v("shadowJar.archiveFile")]),e._v(" property at execution time, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/60",target:"_blank",rel:"noopener noreferrer"}},[e._v("#60"),r("OutboundLink")],1)])]),e._v(" "),e._m(40),e._v(" "),r("ul",[r("li",[e._v("Previously known as v0.9.0")]),e._v(" "),r("li",[e._v("All changes from 0.9.0-M1 to 0.9.0-M5")]),e._v(" "),r("li",[e._v("Properly configure the ShadowJar task inputs to observe the include/excludes from the "),r("code",[e._v("dependencies")]),e._v(" block. This\nallows UP-TO-DATE checking to work properly when changing the "),r("code",[e._v("dependencies")]),e._v(" rulea, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/54",target:"_blank",rel:"noopener noreferrer"}},[e._v("#54"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Apply relocation remappings to classes and imports in source project, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/55",target:"_blank",rel:"noopener noreferrer"}},[e._v("#55"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Do not create directories in jar for source of remapped class, created directories in jar for destination of remapped classes, "),r("a",{attrs:{href:"https://github.com/johnrengelman/shadow/issues/53",target:"_blank",rel:"noopener noreferrer"}},[e._v("#53"),r("OutboundLink")],1)])]),e._v(" "),e._m(41),e._v(" "),e._m(42),e._v(" "),e._m(43),e._v(" "),e._m(44),e._v(" "),e._m(45),e._v(" "),e._m(46),e._v(" "),e._m(47),e._v(" "),e._m(48),e._v(" "),e._m(49),e._v(" "),e._m(50)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"change-log"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#change-log","aria-hidden":"true"}},[this._v("#")]),this._v(" Change Log")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"v4-0-3-2018-11-21"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v4-0-3-2018-11-21","aria-hidden":"true"}},[this._v("#")]),this._v(" v4.0.3 (2018-11-21)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"v4-0-2-2018-10-27"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v4-0-2-2018-10-27","aria-hidden":"true"}},[this._v("#")]),this._v(" v4.0.2 (2018-10-27)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"v4-0-1-2018-09-30"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v4-0-1-2018-09-30","aria-hidden":"true"}},[this._v("#")]),this._v(" v4.0.1 (2018-09-30)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"v4-0-0-2018-09-25"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v4-0-0-2018-09-25","aria-hidden":"true"}},[this._v("#")]),this._v(" v4.0.0 (2018-09-25)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("Breaking Change!")]),this._v(" Restrict Plugin to Gradle 4.0+. Shadow major versions will align with Gradle major versions going forward.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"v2-0-4-2018-04-27"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v2-0-4-2018-04-27","aria-hidden":"true"}},[this._v("#")]),this._v(" v2.0.4 (2018-04-27)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("Remove usage of Gradle internal "),t("code",[this._v("AbstractFileCollection")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"v2-0-3-2018-03-24"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v2-0-3-2018-03-24","aria-hidden":"true"}},[this._v("#")]),this._v(" v2.0.3 (2018-03-24)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"v2-0-2-2017-12-12"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v2-0-2-2017-12-12","aria-hidden":"true"}},[this._v("#")]),this._v(" v2.0.2 (2017-12-12)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"v2-0-1-2017-06-23"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v2-0-1-2017-06-23","aria-hidden":"true"}},[this._v("#")]),this._v(" v2.0.1 (2017-06-23)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"v2-0-0-2017-05-09"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v2-0-0-2017-05-09","aria-hidden":"true"}},[this._v("#")]),this._v(" v2.0.0 (2017-05-09)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("Breaking Change!")]),this._v(" Restrict Plugin to Gradle 3.0+")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("Breaking Change!")]),this._v(" Build with Java 7")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("Breaking Change!")]),this._v(" Updated "),t("code",[this._v("Transformer")]),this._v(" interface to accept "),t("code",[this._v("TransformerContext")]),this._v(" object instead of individual values")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("strong",[e._v("Breaking Change!")]),e._v(" Updated "),r("code",[e._v("Relocator")]),e._v(" interface to accept "),r("code",[e._v("RelocatePathContext")]),e._v(" and "),r("code",[e._v("RelocateClassContext")]),e._v(" objects")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("strong",[e._v("Breaking Change!")]),e._v(" Distribution tasks "),r("code",[e._v("distShadowZip")]),e._v(" and "),r("code",[e._v("distShadowTar")]),e._v(" have been removed and replaced with the standard "),r("code",[e._v("shadowDistZip")]),e._v(" and "),r("code",[e._v("shadowDistTar")]),e._v(" from the Gradle Distribution plugin.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("Breaking Change!")]),this._v(" The "),t("code",[this._v("installShadowApp")]),this._v(" task has been removed and replaced with the standard "),t("code",[this._v("installShadowDist")]),this._v(" task from the Gradle Distribution plugin.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("strong",[e._v("Breaking Change!")]),e._v(" The new "),r("code",[e._v("installShadowDist")]),e._v(" task outputs to "),r("code",[e._v("build/install/<project name>-shadow")]),e._v(" per the standard (formerly was "),r("code",[e._v("build/installShadow")]),e._v(")")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("Breaking Change!")]),this._v(" "),t("code",[this._v("component.shadow")]),this._v(" removed in favor of "),t("code",[this._v("project.shadow.component(publication)")]),this._v(" so as to remove dependency on internal Gradle APIs.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("em",[this._v("NEW")]),this._v(" Introducing "),t("code",[this._v("ConfigureShadowRelocation")]),this._v(" task and "),t("code",[this._v("com.github.johnrengelman.plugin-shadow")]),this._v(" plugin to automatically configure package relocation for Gradle plugins.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("em",[this._v("NEW")]),this._v(" Integration with Gradle Build Scans. When running a "),t("code",[this._v("ShadowJar")]),this._v(" task with Build Scans, custom values including dependencies merged anc package relocations are published in the scan.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("Replace "),t("code",[this._v("startShadowScripts")]),this._v(" tasks with Gradle's built-in "),t("code",[this._v("CreateStartScripts")]),this._v(" type.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"v1-2-4-2016-11-03"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v1-2-4-2016-11-03","aria-hidden":"true"}},[this._v("#")]),this._v(" v1.2.4 (2016-11-03)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"v1-2-3-2016-01-25"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v1-2-3-2016-01-25","aria-hidden":"true"}},[this._v("#")]),this._v(" v1.2.3 (2016-01-25)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"v1-2-2-2015-07-17"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v1-2-2-2015-07-17","aria-hidden":"true"}},[this._v("#")]),this._v(" v1.2.2 (2015-07-17)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"v1-2-1-2015-01-23"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v1-2-1-2015-01-23","aria-hidden":"true"}},[this._v("#")]),this._v(" v1.2.1 (2015-01-23)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"v1-2-0-2014-11-24"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v1-2-0-2014-11-24","aria-hidden":"true"}},[this._v("#")]),this._v(" v1.2.0 (2014-11-24)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("Re-organize some code to remove need for forcing the Gradle API ClassLoader to allow the "),t("code",[this._v("org.apache.tools.zip")]),this._v(" package.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"v1-1-2-2014-09-09"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v1-1-2-2014-09-09","aria-hidden":"true"}},[this._v("#")]),this._v(" v1.1.2 (2014-09-09)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"v1-1-1-2014-08-27"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v1-1-1-2014-08-27","aria-hidden":"true"}},[this._v("#")]),this._v(" v1.1.1 (2014-08-27)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"v1-1-0-2014-08-26"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v1-1-0-2014-08-26","aria-hidden":"true"}},[this._v("#")]),this._v(" v1.1.0 (2014-08-26)")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("code",[e._v("ShadowTask")]),e._v(" now has a "),r("code",[e._v("configurations")]),e._v(" property that is resolved to the files in the resolved configuration before\nbeing added to the copy spec. This allows for an easier implementation for filtering. The default 'shadowJar' task\nhas the convention of adding the "),r("code",[e._v("'runtime'")]),e._v(" scope to this list. Manually created instances of "),r("code",[e._v("ShadowTask")]),e._v(" have no\nconfigurations added by default and can be configured by setting "),r("code",[e._v("task.configurations")]),e._v(".")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[e._v("Properly configure integration with the "),r("code",[e._v("'maven'")]),e._v(" plugin when added. When adding "),r("code",[e._v("'maven'")]),e._v(" the "),r("code",[e._v("'uploadShadow'")]),e._v(" task\nwill now properly configure the POM dependencies by removing the "),r("code",[e._v("'compile'")]),e._v(" and "),r("code",[e._v("'runtime'")]),e._v(" configurations from the\nPOM and adding the "),r("code",[e._v("'shadow'")]),e._v(" configuration as a "),r("code",[e._v("RUNTIME")]),e._v(" scope in the POM. This behavior matches the behavior when\nusing the "),r("code",[e._v("'maven-publish'")]),e._v(" plugin.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"v1-0-3-2014-07-29"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v1-0-3-2014-07-29","aria-hidden":"true"}},[this._v("#")]),this._v(" v1.0.3 (2014-07-29)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"v1-0-2-2014-07-07"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v1-0-2-2014-07-07","aria-hidden":"true"}},[this._v("#")]),this._v(" v1.0.2 (2014-07-07)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("Do not add an empty Class-Path attribute to the manifest when the "),t("code",[this._v("shadow")]),this._v(" configuration contains no dependencies.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("code",[e._v("runShadow")]),e._v(" now registers "),r("code",[e._v("shadowJar")]),e._v(" as an input. Previously, "),r("code",[e._v("runShadow")]),e._v(" did not execute "),r("code",[e._v("shadowJar")]),e._v(" and an error occurred.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"v1-0-1-2014-06-28"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v1-0-1-2014-06-28","aria-hidden":"true"}},[this._v("#")]),this._v(" v1.0.1 (2014-06-28)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("Do not create a "),t("code",[this._v("/")]),this._v(" directory inside the output jar.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"v1-0-0-2014-06-27"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v1-0-0-2014-06-27","aria-hidden":"true"}},[this._v("#")]),this._v(" v1.0.0 (2014-06-27)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"v0-9-0-m5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-9-0-m5","aria-hidden":"true"}},[this._v("#")]),this._v(" v0.9.0-M5")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Add commons-io to compile classpath")]),this._v(" "),t("li",[this._v("Update asm library to 4.1")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"v0-9-0-m4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-9-0-m4","aria-hidden":"true"}},[this._v("#")]),this._v(" v0.9.0-M4")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("Break plugin into multiple sub-plugins. "),r("code",[e._v("ShadowBasePlugin")]),e._v(" is always applied.\n"),r("code",[e._v("ShadowJavaPlugin")]),e._v(" and "),r("code",[e._v("ShadowApplicationPlugin")]),e._v(" are applied in reaction to applying the "),r("code",[e._v("java")]),e._v(" and "),r("code",[e._v("application")]),e._v("\nplugins respectively.")]),e._v(" "),r("li",[e._v("Shadow does not applied "),r("code",[e._v("java")]),e._v(" plugin automatically. "),r("code",[e._v("java")]),e._v(" or "),r("code",[e._v("groovy")]),e._v(" must be applied in conjunction with "),r("code",[e._v("shadow")]),e._v(".")]),e._v(" "),r("li",[e._v("Moved artifact filtering to "),r("code",[e._v("dependencies {}")]),e._v(" block underneath "),r("code",[e._v("shadowJar")]),e._v(". This allows better include/exclude control\nfor dependencies.")]),e._v(" "),r("li",[e._v("Dependencies added to the "),r("code",[e._v("shadow")]),e._v(" configuration are automatically added to the "),r("code",[e._v("Class-Path")]),e._v(" attribute in the manifest\nfor "),r("code",[e._v("shadowJar")])]),e._v(" "),r("li",[e._v("Applying "),r("code",[e._v("application")]),e._v(" plugin and settings "),r("code",[e._v("mainClassName")]),e._v(" automatically configures the "),r("code",[e._v("Main-Class")]),e._v(" attribute in\nthe manifest for "),r("code",[e._v("shadowJar")])]),e._v(" "),r("li",[r("code",[e._v("runShadow")]),e._v(" now utilizes the output of the "),r("code",[e._v("shadowJar")]),e._v(" and executes using "),r("code",[e._v("java -jar <shadow jar file>")])]),e._v(" "),r("li",[e._v("Start Scripts for shadow distribution now utilize "),r("code",[e._v("java -jar")]),e._v(" to execute instead of placing all files on classpath\nand executing main class.")]),e._v(" "),r("li",[e._v("Excluding/Including dependencies no longer includes transitive dependencies. All dependencies for inclusion/exclusion\nmust be explicitly configured via a spec.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"v0-9-0-m3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-9-0-m3","aria-hidden":"true"}},[this._v("#")]),this._v(" v0.9.0-M3")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Use commons.io FilenameUtils to determine name of resolved jars for including/excluding")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"v0-9-0-m2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-9-0-m2","aria-hidden":"true"}},[this._v("#")]),this._v(" v0.9.0-M2")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("Added integration with "),r("code",[e._v("application")]),e._v(" plugin to replace old "),r("code",[e._v("OutputSignedJars")]),e._v(" task")]),e._v(" "),r("li",[e._v("Fixed bug that resulted in duplicate file entries in the resulting Jar")]),e._v(" "),r("li",[e._v("Changed plugin id to 'com.github.johnrengelman.shadow' to support Gradle 2.x plugin infrastructure.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"v0-9-0-m1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-9-0-m1","aria-hidden":"true"}},[this._v("#")]),this._v(" v0.9.0-M1")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("Rewrite based on Gradle Jar Task")]),e._v(" "),r("li",[r("code",[e._v("ShadowJar")]),e._v(" now extends "),r("code",[e._v("Jar")])]),e._v(" "),r("li",[e._v("Removed "),r("code",[e._v("signedCompile")]),e._v(" and "),r("code",[e._v("signedRuntime")]),e._v(" configurations in favor of "),r("code",[e._v("shadow")]),e._v(" configuration")]),e._v(" "),r("li",[e._v("Removed "),r("code",[e._v("OutputSignedJars")]),e._v(" task")])])}],!1,null,null,null);a.options.__file="README.md";t.default=a.exports}}]);