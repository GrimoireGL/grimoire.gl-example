for file in `ls ./node_modules/grimoirejs*/register/grimoire*.js`
do
  bn= basename $file
  cp -f -v $file ./static/$bn
done
