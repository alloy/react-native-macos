require "json"

package = JSON.parse(File.read(File.join(__dir__, "..", "package.json")))
version = package['version']

Pod::Spec.new do |s|
  s.name                   = "React-TurboModuleCxx-RNW"
  s.version                = version
  s.summary                = "C++ supporting for Turbo Module."
  s.homepage               = "https://github.com/microsoft/react-native-windows"
  s.license                = package["license"]
  s.author                 = "Microsoft Corporation"
  s.platforms              = { :ios => "10.0", :tvos => "10.0", :osx => "10.13" }
  s.source                 = { :git => 'https://github.com/microsoft/react-native-windows.git',
                               :commit => "1f0f5371fc96ad42971a6dc1cee8f530d178d5d2" }
  s.source_files           = "vnext/Shared/TurboModuleRegistry.h",
                             "vnext/Microsoft.React/JsiReader.{h,cpp}",
                             "vnext/Microsoft.React/JsiWriter.{h,cpp}",
                             "vnext/Microsoft.React/TurboModulesProvider.{h,cpp}"
  s.library                = "stdc++"
  s.pod_target_xcconfig    = { "USE_HEADERMAP" => "YES",
                               "CLANG_CXX_LANGUAGE_STANDARD" => "c++17" ,
                               "HEADER_SEARCH_PATHS" => "\"$(PODS_ROOT)/Headers/Private/React-callinvoker\"" "\"$(PODS_ROOT)/Headers/Private/ReactCommon\"" }

  s.dependency "React-callinvoker", version
  s.dependency "ReactCommon/turbomodule/core", version
end
