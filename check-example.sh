
for i in $(seq 1 10);do
  i=`printf %03d $i`
  open http://localhost:8080/\#example-$i
done

# for a  in ./t* ; do
# echo $a | sed -e "s/\.\///"
# open http://localhost:8080/\#$a
# done