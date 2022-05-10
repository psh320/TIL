# Install and Set up environment for React-Native with Typescript

## Install Homebrew

Homebrew is installing program for mac. Visit https://brew.sh and copy the following command and run on terminal.

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

## Install Visual Studio

```
brew install cask
brew install --cask visual-studio-code
```

## Install Node.js

```
brew install wget
touch $Home/.zshrc
wget -q0- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh
```

After running this command, following data is inserted to $HOME/.zshrc

```
export NVM_DIR="$HOME/.nvm"
[-s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
```

After that, run this command to apply the changes to shell.

```
source .zshrc
```

## Install Java11 JDK

React-Native needs Android SDK build tool and it uses Java version 11 JDK.

```
brew tap homebrew/cask-versions
brew install --cask temurin11
```

After that update .zshrc file a little bit.

```
code $HOME/.zshrc

//Add this line to .zshrc file
export JAVA_HOME=/Library/Java/JavaVirtualMachines/temurin-11.jdk/Contents/Home

source .zshrc
```

## Install Cocoapod

_You need to install Xcode in advance which can be downloaded on xcode website._

To build an IOS app in React-Native, we need to build Native Module which is Objective-C. However, Objective-C is not able to download OpenSource packages from hosted remote repositiory. Here cocoapod plays a role to download various packages and install in local computer.

```
sudo gem install cocoapods
pod --version
```

## Install Watchman

```
brew install watchman

watchman --version
```

## Install Android Studio

Intall android studio from the website
[configure] -> [SDK manager] -> [SDK Tools] Select options to install. (Android Emulator, Android SDK build tool, Android SDK Tools, etc.)

```
code $HOME/.zshrc

export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
export PATH=$PATH:$ANDROID_SDK_ROOT/tools
export PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
```