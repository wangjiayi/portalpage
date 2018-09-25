import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.SortedMap;
import java.util.SortedSet;. 留学申请论坛-一亩三分地
import java.util.TreeMap;
import java.util.TreeSet;
来源一亩.三分地论坛. 
public class CatchInsider {
         Map<Integer,Double> priceMap  = new HashMap<>();
        SortedMap<Integer,SortedSet<Transaction>> transactionMap = new TreeMap<>();

        public Set<String> catchInsiders(String[] input) {. 留学申请论坛-一亩三分地
                initialData(input);
                Set<String> result = new HashSet<>();
                for (Integer key : transactionMap.keySet()) {. 1point 3acres 论坛
                        SortedSet<Transaction> currentSet = transactionMap.get(key);
                        for (Transaction tr : currentSet) {. 牛人云集,一亩三分地
                                double curValue = tr.amount * priceMap.get(key);
                                for (int i = 1; i <= 3; i++) {
                                        if (priceMap.get(key + i) != null) {. 牛人云集,一亩三分地
                                                double delta = tr.amount * priceMap.get(key + i) - curValue;
                                                if ((tr.buy && delta >= 5000000) || (!tr.buy && delta <= -5000000)) {
                                                        result.add(tr.name);. from: 1point3acres 
                                                }
                                        }
                                }. 1point 3acres 论坛

                        }
                }
                return result;
. 围观我们@1point 3 acres
        }
        private void initialData(String[] input) {
                for(String st : input){. From 1point 3acres bbs
                        String[] stArr = st.split("\\|");
                        if(stArr.length == 2) {
                                priceMap.put(Integer.parseInt(stArr[0]),Double.parseDouble(stArr[1]));.留学论坛-一亩-三分地
                        } else {
                                Transaction trans = new Transaction(Integer.parseInt(stArr[0]),stArr[2].equals("BUY"),
                                                stArr[1],Integer.parseInt(stArr[3]));
                                int key = Integer.parseInt(stArr[0]);
                                if(!transactionMap.containsKey(key)){. from: 1point3acres 
                                        transactionMap.put(key,  new TreeSet<Transaction>());. from: 1point3acres 
                                }
                                transactionMap.get(key).add(trans);
                        }
                }
        }
        public static void main(String[] args) {
                String[] data = new String[]{"1|700", "2|10000","3|50","4|700", "5|10","6|50000","1|Bob|BUY|30000", "1|Alan|BUY|20000"
                                ,"2|tob|BUY|30000", "3|Ann|BUY|20000","5|Bb|BUY|30000", "4|Aggn|BUY|20000"};
                CatchInsider cs = new CatchInsider();
                System.out.println(cs.catchInsiders(data));. 1point3acres
        }
        
        class Transaction implements Comparable<Transaction> {
                int day;. 牛人云集,一亩三分地
                boolean buy;
                String name;
                int amount;
                public Transaction(int day, boolean buy, String name, int amount) {. 留学申请论坛-一亩三分地
                        this.day = day;. 围观我们@1point 3 acres
                        this.buy = buy;
                        this.name = name;
                        this.amount = amount;. 牛人云集,一亩三分地
                }-google 1point3acres
                . 牛人云集,一亩三分地
                @Override
                public int compareTo(Transaction t2) {
                        if(this.day == t2.day){
                                return  this.name.compareTo(t2.name);. 一亩-三分-地，独家发布
                        } else {
                                return this.day -t2.day;
                        }
                         
                }
                 
                
        }